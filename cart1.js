import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Men's Harrington Jacket",
      size: "M",
      color: "Lemon",
      price: 148,
      quantity: 1,
      image: "data:image/jpeg;base64,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", // Random image
    },
    {
      id: 2,
      name: "Men's Coaches Jacket",
      size: "M",
      color: "Black",
      price: 52,
      quantity: 1,
      image: "data:image/jpeg;base64,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", // Random image
    },
  ]);

  const [coupon, setCoupon] = useState("");
  const [shippingCost, setShippingCost] = useState(8.0);

  const updateQuantity = (id, type) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity = type === "increase" ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + shippingCost;

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 20 ,paddingTop:30}}>Cart</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15, backgroundColor: "#f6f6f6", borderRadius: 10, padding: 10 }}>
            <Image source={{ uri: item.image }} style={{ width: 60, height: 60, borderRadius: 8 }} />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              <Text>Size: {item.size} | Color: {item.color}</Text>
              <Text style={{ fontWeight: "bold", marginTop: 5 }}>₹{item.price * item.quantity}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity onPress={() => updateQuantity(item.id, "decrease")} style={{ backgroundColor: "#ff748b", borderRadius: 20, padding: 5 }}>
                <Text style={{ fontSize: 18, color: "#fff", paddingHorizontal: 10 }}>-</Text>
              </TouchableOpacity>
              <Text style={{ marginHorizontal: 10, fontSize: 16 }}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => updateQuantity(item.id, "increase")} style={{ backgroundColor: "#ff748b", borderRadius: 20, padding: 5 }}>
                <Text style={{ fontSize: 18, color: "#fff", paddingHorizontal: 10 }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 16 }}>Subtotal: ₹{subtotal.toFixed(2)}</Text>
        <Text style={{ fontSize: 16 }}>Shipping Cost: ₹{shippingCost.toFixed(2)}</Text>
        <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 5 }}>Total: ₹{total.toFixed(2)}</Text>
      </View>

      <TextInput
        placeholder="Enter Coupon Code"
        value={coupon}
        onChangeText={setCoupon}
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 10,
          padding: 10,
          marginTop: 15,
          fontSize: 16,
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#ff748b",
          padding: 15,
          borderRadius: 10,
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;
