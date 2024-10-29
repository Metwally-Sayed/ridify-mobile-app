import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import Swiper from "react-native-swiper";
import WelcomeItem from "../components/welcome/welcomeItem";
import { WelcomeData } from "../utils/dummy";
import AntDesign from "@expo/vector-icons/AntDesign";
type Props = {
  navigation: any;
};

const WelcomeScreen = ({ navigation }: Props) => {
  const [swapIndex, setSwapIndex] = useState<number>(0);
  const swiperRef = useRef<Swiper>(null);

  const handlerSkip = () => {
    navigation.replace("Login");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable
        style={({ pressed }) => {
          return {
            opacity: pressed ? 0.5 : 1,
          };
        }}
        onPress={() => handlerSkip()}
      >
        <Text style={styles.headerTitle}>
          {swapIndex === WelcomeData.length - 1 ? (
            <AntDesign name="right" size={24} color="black" />
          ) : (
            "Skip"
          )}
        </Text>
      </Pressable>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 50,
        }}
      >
        <Swiper
          ref={swiperRef}
          loop={false}
          bounces={false}
          onIndexChanged={(index) => setSwapIndex(index)}
          showsPagination={true}
          activeDotColor="black"
          dotColor="gray"
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
          }}
          activeDotStyle={{
            width: 25,
            height: 10,
            borderRadius: 5,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
          }}
          paginationStyle={{
            bottom: 0,
          }}
        >
          {WelcomeData.map((item, i) => (
            <WelcomeItem item={item} key={i} />
          ))}
        </Swiper>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  headerTitle: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "right",
    paddingRight: 20,
  },
});
