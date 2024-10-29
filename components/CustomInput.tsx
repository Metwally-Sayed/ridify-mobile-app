import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";

type Props = {
  title: string;
  keyboardType: "default" | "numeric" | "email-address" | "phone-pad";
};

const CustomInput = ({ title, keyboardType }: Props) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput keyboardType={keyboardType} style={styles.input} />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 20,
    textAlign: "left",
  },
  input: {
    height: 50,
    borderColor: "#d8d8d8",
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
