import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const OrderSuccessScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/190/190411.png" }}
          style={styles.icon}
        />
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.successText}>Order Placed Successfully</Text>
        <Text style={styles.subText}>You will receive an email confirmation</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>See Order details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff6b81",
    alignItems: "center",
    justifyContent: "center",
  },
  topSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 100,
    height: 100,
  },
  bottomSection: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  successText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subText: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#ff6b81",
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default OrderSuccessScreen;
