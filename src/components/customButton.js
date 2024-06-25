import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({ backgroundColor, color, text, width, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor, width }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
  },
});

export default CustomButton;
