import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { ridesHistory } from "../utils/dummy";
import RideCardHistory from "../components/RideCardHistory";
import Maps from "../components/Maps";
import * as Location from "expo-location";
import CustomPlacesSearch from "../components/GoogleInputSearch";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { setUserLocation } from "../state/userLocationSlice";
import { setUserTrip } from "../state/userTripSlice";

type Props = {
  navigation: any;
};

const HomeScreen = ({ navigation }: Props): JSX.Element => {
  const [hasPermision, setHasPermisiion] = useState<boolean>(false);
  const userLocation = useSelector((state: RootState) => state.userLocation);
  const dispatch = useDispatch();

  console.log(userLocation);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setHasPermisiion(false);
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords?.latitude!,
        longitude: location.coords?.longitude!,
      });
      dispatch(
        setUserLocation({
          latitude: location.coords?.latitude!,
          longitude: location.coords?.longitude!,
          address: address[0].name,
        })
      );
    })();
  }, []);

  console.log(userLocation, "userLocation");

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

  const handleSearchBar = (locationData: {}) => {
    setUserTripLocation(locationData);
    navigation.navigate("FindRideScreen");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginHorizontal: 20, marginVertical: 15, zIndex: 999 }}>
        <CustomPlacesSearch handlePress={handleSearchBar} />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={ridesHistory}
          ListHeaderComponent={() => (
            <View style={{ padding: 20, flex: 1, zIndex: 999 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 20, marginVertical: 10 }}
              >
                Your Current Location
              </Text>

              <View
                style={{
                  height: 300,
                  borderRadius: 10,
                  width: "100%",
                  marginVertical: 20,
                }}
              >
                <Maps />
              </View>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Your Recent Rides
              </Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.created_at}
          renderItem={({ item }) => <RideCardHistory item={item} />}
          ListFooterComponent={() => <View style={{ height: 70 }}></View>}
          style={{ height: "100%" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
