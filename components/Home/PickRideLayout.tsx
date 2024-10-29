import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Map from "../Maps";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const RideLayout = ({
  title,
  children,
  keyboardVisible,
  value,
}: {
  title: string;
  snapPoints?: string[];
  children: React.ReactNode;
  keyboardVisible?: boolean;
  value?: string[] | undefined;
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const navigation = useNavigation();

  console.log(keyboardVisible, "kk");

  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1 bg-white">
        <View className="flex flex-col">
          <View className="flex flex-row absolute z-10 top-10 items-center justify-start px-5">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View className="w-10 h-10 bg-white rounded-full items-center justify-center">
                <Text>
                  <Ionicons name="chevron-back" size={24} color="black" />{" "}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Map />
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={
            keyboardVisible ? ["80%"] : value ? value : ["40%", "80%"]
          }
          index={0}
        >
          {title === "Choose a Rider" ? (
            <BottomSheetView
              style={{
                flex: 1,
                padding: 20,
              }}
            >
              {children}
            </BottomSheetView>
          ) : (
            <BottomSheetView
              style={{
                flex: 1,
                padding: 20,
              }}
            >
              {children}
            </BottomSheetView>
          )}
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default RideLayout;
