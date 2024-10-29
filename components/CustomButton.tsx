import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

type Props = {
  children?: React.ReactNode;
  onPress: () => void;
  color?: string;
  backgroundColor?: string;
  iconeLeft?: any;
  iconeRight?: any;
  iconLeftColor?: string;
  iconRightColor?: string;
  iconSize?: number;
  type?: "PRIMARY" | "SECONDARY";
  disabled?: boolean;
  size?: "SMALL" | "DEFAULT" | "LARGE";
  style?: any;
  loading?: boolean;
  loadingText?: string;
  loadingColor?: string;
  loadingSize?: "SMALL" | "DEFAULT" | "LARGE";
  loadingType?: "PRIMARY" | "SECONDARY";
};

const CustomButton = ({
  children,
  iconeLeft,
  iconeRight,
  iconSize,
  ...props
}: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.loading}
      style={[styles.container, { backgroundColor: props.backgroundColor }]}
    >
      {iconeLeft && (
        <AntDesign
          name={iconeLeft}
          size={iconSize || 24}
          color={props.iconLeftColor || "black"}
        />
      )}
      {props.loading && (
        <Text style={{ ...styles.text, color: props.loadingColor }}>
          {props.loadingText}
        </Text>
      )}
      {children && (
        <Text style={{ ...styles.text, color: props.color }}>{children}</Text>
      )}
      {iconeRight && (
        <AntDesign
          name={iconeRight}
          size={iconSize || 24}
          color={props.iconRightColor || "black"}
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  text: {
    textAlign: "center",
    fontWeight: "500",
  },
});
