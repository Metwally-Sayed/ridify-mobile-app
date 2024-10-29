import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import PickRideLayout from "../components/Home/PickRideLayout";
import GoogleInputSearch from "../components/GoogleInputSearch";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { KeyboardAvoidingView } from "react-native";
import CustomButton from "../components/CustomButton";
import { setUserPickupLocation, setUserTrip } from "../state/userTripSlice";

type Props = {
  navigation: any;
  route: any;
};

const FindRideScreen = ({ navigation, route }: Props) => {
  console.log(route, "rrr");
  const dispatch = useDispatch();
  const userLocation = useSelector((state: RootState) => state.userLocation);
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
  }, [Keyboard.isVisible()]);

  React.useEffect(() => {
    if (userLocation?.latitude && userLocation?.longitude) {
      setCurrentUserLocation(userLocation);
    }
  }, [userLocation]);

  const setCurrentUserLocation = (location: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    console.log(location, "location");
    dispatch(
      setUserPickupLocation({
        userLatitude: location?.latitude,
        userLongitude: location?.longitude,
        userAddress: location?.address,
      })
    );
  };

  const setUserTripLocation = (location: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    dispatch(
      setUserTrip({
        destinationLatitude: location?.latitude,
        destinationLongitude: location?.longitude,
        destinationAddress: location?.address,
      })
    );
  };

  const clearUserPickupLocation = () => {
    dispatch(setUserPickupLocation({} as any));
  };

  const clearUserTrip = () => {
    dispatch(setUserTrip({} as any));
  };
  return (
    <PickRideLayout keyboardVisible={keyboardVisible} title={""}>
      <View>
        <View
          style={{
            height: 70,
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 25 }}>Find Ride</Text>
        </View>
        <View style={{ zIndex: 1, height: 100 }}>
          <Text style={{ fontWeight: "400", fontSize: 20, marginBottom: 10 }}>
            From
          </Text>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <GoogleInputSearch
              deleteHandler={() => clearUserPickupLocation()}
              initialLocation={userLocation.address}
              handlePress={(location) => setCurrentUserLocation(location)}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={{ zIndex: -1, marginTop: 10, height: 100 }}>
          <Text style={{ fontWeight: "400", fontSize: 20, marginBottom: 10 }}>
            To
          </Text>
          <GoogleInputSearch
            deleteHandler={() => clearUserTrip()}
            initialLocation={userTrip.destinationAddress}
            handlePress={(location) => setUserTripLocation(location)}
          />
        </View>
        <View style={{ marginTop: 25 }}>
          <CustomButton
            onPress={() => {
              console.log(userTrip, "trip");
              navigation.navigate("DriverScreen", {
                userTrip: userTrip,
              });
            }}
            color="white"
            backgroundColor="black"
          >
            Start Search
          </CustomButton>
        </View>
      </View>
    </PickRideLayout>
  );
};

export default FindRideScreen;

const styles = StyleSheet.create({});
