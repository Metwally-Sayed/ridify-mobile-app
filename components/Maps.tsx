import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";
import * as Location from "expo-location";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

const API_KEY = "AIzaSyA04aeLChcrabbYCVMFAkAAbB5uTMCN7qU";

type Props = {};

const Maps = ({}: Props) => {
  const userLocation = useSelector((state: RootState) => state.userLocation);

  const region = {
    latitude: userLocation?.latitude,
    longitude: userLocation?.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return region.latitude === 0 && region.longitude === 0 ? (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color={"black"} />
    </View>
  ) : (
    <MapView
      provider={PROVIDER_DEFAULT}
      tintColor="black"
      mapType="mutedStandard"
      showsUserLocation={true}
      followsUserLocation={true}
      className="w-full h-full rounded-2xl"
      userInterfaceStyle="light"
      initialRegion={region}
    ></MapView>
  );
};

export default Maps;

const styles = StyleSheet.create({});
