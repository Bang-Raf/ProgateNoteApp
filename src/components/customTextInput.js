import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const CustomTextInput = ({
  text,
  onChange,
  label,
  placeholder,
  numberOfLines,
  multiline,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChange}
        placeholder={placeholder}
        numberOfLines={numberOfLines}
        multiline={multiline}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#203239",
  },
  input: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 5,
    borderColor: "#ddd",
    borderWidth: 1,
  },
});

export default CustomTextInput;
