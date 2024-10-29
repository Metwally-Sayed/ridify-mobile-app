import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  item: {
    title: string;
    description: string;
    image: string;
  };
};

const WelcomeItem = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.title}</Text>
      {/* <View style={{ alignItems: "center" }}>
        <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: item.image }}
        />
      </View> */}
      <Text style={styles.des}>{item.description}</Text>
    </View>
  );
};

export default WelcomeItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    padding: 20,
    justifyContent: "space-evenly",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  des: {
    textAlign: "center",
    fontSize: 15,
    color: "gray",
  },
});
