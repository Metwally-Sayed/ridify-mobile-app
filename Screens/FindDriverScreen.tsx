import { FlatList, Keyboard, StyleSheet, Text, View } from "react-native";
import React from "react";
import PickRideLayout from "../components/Home/PickRideLayout";
import CustomButton from "../components/CustomButton";
import { drivers } from "../utils/dummy";
import DriverCard from "../components/DriverCard";
import { useDispatch, useSelector } from "react-redux";
import { setDriverId } from "../state/userTripSlice";
import { RootState } from "../state/store";

type Props = {};

const FindDriverScreen = (props: Props) => {
  const dispatch = useDispatch();
  const userTrip = useSelector((state: RootState) => state.userTrip);

  const [keyboardVisible, setKeyboardVisible] = React.useState(false);
  React.useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      "keyboardWillShow",
      (event) => {
        setKeyboardVisible(true);
      }
    );
    const keyboardWillHideListener = Keyboard.addListener(
      "keyboardWillHide",
      (event) => {
        setKeyboardVisible(false);
      }
    );
    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, []);

  const selectDriverHadler = (id: number) => {
    dispatch(setDriverId(id));
  };

  return (
    <PickRideLayout
      value={["85%"]}
      keyboardVisible={keyboardVisible}
      title={""}
    >
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Text style={{ fontWeight: "500", fontSize: 25 }}>Pick Driver </Text>
        <FlatList
          data={drivers}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <DriverCard item={item} setSelected={selectDriverHadler} />
          )}
        />
      </View>
    </PickRideLayout>
  );
};

export default FindDriverScreen;

const styles = StyleSheet.create({});
