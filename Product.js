import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { withTheme } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";

const ProductScreen = () => {
  const [size, setSize] = useState("s");
  const [color, setColor] = useState("green");
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Men's Harrington Jacket from Nike",
    originalPrice: 148,
    discountPrice: 120 ,
    discountText: "₹10 off | First order Discount",
    freeDelivery: true,
    description:
      "Built for life and made to last, this full-zip corduroy jacket is part of our Nike Life collection. The spacious fit gives you plenty of room to layer underneath, while the soft corduroy.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTBE-eOwIWnCVVnDdegK0WQGZVpyA_MNC09w&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8DMIsR9dbEBQ0P_1IIB9Zr_oqJUFMNU0nuA&s", // Jacket image 2
    ]
  };

  return (
    <View style={styles.container}>
      {/* Back & Wishlist Icons */}
      <View style={styles.header}>
        <TouchableOpacity><Text style={styles.icon}>←</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.icon}>♡</Text></TouchableOpacity>
      </View>

      {/* Product Images */}
      <FlatList
        data={product.images}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Image source={{ uri: item }} style={styles.productImage} />}
      />

      {/* Product Details */}
      <View style={styles.details}>
        <Text style={styles.productName}>{product.name}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.originalPrice}>₹{product.originalPrice}</Text>
          <Text style={styles.discountPrice}> ₹{product.discountPrice}</Text>
          <Text style={styles.offerText}> with 1 offer</Text>
        </View>
        <Text style={styles.discountText}>{product.discountText}</Text>
        {product.freeDelivery && <Text style={styles.freeDelivery}>Free Delivery</Text>}

        {/* Size Picker */}
        <Text style={styles.label}>Size</Text>
        <RNPickerSelect
          onValueChange={(value) => setSize(value)}
          items={[{ label: "S", value: "S" }, { label: "M", value: "M" }, { label: "L", value: "L" }]}
          style={pickerSelectStyles}
          value={size}
        />

        {/* Color Picker */}
        <Text style={styles.label}>Color</Text>
        <RNPickerSelect
          onValueChange={(value) => setColor(value)}
          items={[{ label: "Green", value: "green" }, { label: "Black", value: "black" }]}
          style={pickerSelectStyles}
          value={color}
        />

        {/* Quantity Selector */}
        <Text style={styles.label}>Quantity</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))} style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)} style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Description */}
        <Text style={styles.description}>{product.description}</Text>

        {/* Add to Bag Button */}
        <TouchableOpacity style={styles.addToBagButton}>
          <Text style={styles.addToBagText}>₹{product.discountPrice * quantity}  |  Add to Bag</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// 🎨 Styles
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fef3f5" },

  header: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    padding: 15 },



  icon: { 
    fontSize: 20, 
    color: "#333" },


  productImage: { 
    width: 200, 
    height: 200, 
    margin: 5, 
    borderRadius: 10, 
    resizeMode: "contain" },


  details: { 
    padding: 15, 
    backgroundColor: "white", 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20 },


  productName: { 
    fontSize: 18, 
    fontWeight: "bold", 
    color: "#333" },


  priceRow: { 
    flexDirection: "row", 
    marginVertical: 5 },


  originalPrice: { 
    textDecorationLine: "line-through", 
    color: "red" },


  discountPrice: { 
    fontSize: 18, 
    fontWeight: "bold", 
    color: "red" },


  offerText: { 
    color: "red" },


  discountText: { 
    color: "green", 
    marginBottom: 5 },


  freeDelivery: { 
    fontWeight: "bold", 
    color: "#333",
    marginBottom: 10 },


  label: { 
    fontSize: 16, 
    fontWeight: "bold", 
    marginTop: 10 },


  quantityContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginTop: 5 },


  quantityButton: { 
    backgroundColor: "#f5f5f5", 
    padding: 10, 
    borderRadius: 5, 
    marginHorizontal: 5 },


  quantityText: { 
    fontSize: 18, 
    fontWeight: "bold" },


  quantity: { 
    fontSize: 18, 
    fontWeight: "bold" },


  description: { 
    marginTop: 10, 
    color: "#666" },


  addToBagButton: { 
    backgroundColor: "#ff748B", 
    padding: 15, 
    borderRadius: 10, 
    alignItems: "center", 
    marginTop: 15 },


  addToBagText: { 
    color: "white", 
    fontSize: 18, 
    fontWeight: "bold" },


  images:{
    paddingleft:4,
    justifyContent:"space-evenly" ,
    borderRadius:30}
});

// Picker Styles
const pickerSelectStyles = {
  inputIOS: { 
    padding: 10, 
    borderWidth: 1, 
    borderColor: "#ddd", 
    borderRadius: 5, 
    marginTop: 5 },

  inputAndroid: { 
    padding: 10, 
    borderWidth: 1, 
    borderColor: "#ddd", 
    borderRadius: 5, 
    marginTop: 5 },
};

export default ProductScreen;
