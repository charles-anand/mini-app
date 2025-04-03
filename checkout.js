import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CheckoutScreen = () => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      
      {/* Header */}
      <Text style={styles.header}>Checkout</Text>

      {/* Shipping Address */}
      <TouchableOpacity style={styles.addressContainer}>
        <Text style={styles.addressLabel}>Shipping Address</Text>
        <Text style={styles.addressText}>Add Shipping Address</Text>
        <Ionicons name="chevron-forward" size={20} color="gray" style={styles.icon} />
      </TouchableOpacity>
      
      {/* Price Details */}
      <View style={styles.priceContainer}>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Subtotal</Text>
          <Text style={styles.priceValue}>₹200</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Shipping Cost</Text>
          <Text style={styles.priceValue}>₹8.00</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Tax</Text>
          <Text style={styles.priceValue}>₹0.00</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={[styles.priceLabel, styles.totalLabel]}>Total</Text>
          <Text style={[styles.priceValue, styles.totalValue]}>₹208</Text>
        </View>
      </View>
      
      {/* Coupon Code */}
      <View style={styles.couponContainer}>
        <TextInput placeholder="Enter Coupon Code" style={styles.couponInput} />
        <TouchableOpacity style={styles.couponButton}>
          <Ionicons name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>
      
      {/* Place Order Button */}
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderText}>₹208   Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  addressContainer: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addressLabel: {
    color: "gray",
    fontSize: 14,
  },
  addressText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  priceContainer: {
    marginTop: 20,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  priceLabel: {
    fontSize: 16,
    color: "gray",
  },
  priceValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalLabel: {
    fontWeight: "bold",
  },
  totalValue: {
    fontSize: 18,
    color: "black",
  },
  couponContainer: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  couponInput: {
    flex: 1,
    fontSize: 16,
  },
  couponButton: {
    backgroundColor: "#ff748b",
    padding: 10,
    borderRadius: 50,
  },
  orderButton: {
    backgroundColor: "#ff748b",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  orderText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CheckoutScreen;