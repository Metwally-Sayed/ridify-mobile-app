import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useRef } from "react";
import "react-native-get-random-values";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

type Props = {
  initialLocation?: string;
  handlePress: ({}) => void;
  deleteHandler?: () => void;
};

const api = "AIzaSyBdfKTokVj5BXo_AOG3GxFqpBLBCTwhPWc";
const GoogleInputSearch = ({
  handlePress,
  initialLocation,
  deleteHandler,
}: Props) => {
  const googleInputRef = useRef<any>(null);
  const userTrip = useSelector((state: RootState) => state.userTrip);

  console.log(userTrip, "trip");

  useEffect(() => {
    if (!initialLocation) return;
    googleInputRef.current?.setAddressText(initialLocation);
  }, [initialLocation]);

  const deleteBtn = () => {
    googleInputRef.current?.clear();
    if (deleteHandler) {
      deleteHandler();
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1, zIndex: 999, position: "relative" }}
    >
      <GooglePlacesAutocomplete
        ref={googleInputRef}
        enableHighAccuracyLocation
        enablePoweredByContainer={false}
        fetchDetails={true}
        placeholder="Search"
        GooglePlacesDetailsQuery={{ fields: "geometry" }}
        debounce={300}
        suppressDefaultStyles
        renderRightButton={() => (
          <TouchableOpacity
            onPress={deleteBtn}
            style={{
              position: "absolute",
              right: 21,
              backgroundColor: "white",
            }}
          >
            <MaterialIcons name="clear" size={20} color="red" />
          </TouchableOpacity>
        )}
        styles={{
          textInputContainer: {
            paddingHorizontal: 20,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            borderRadius: 10,
            position: "relative",
            shadowColor: "#d4d4d4",
            borderColor: "#d8d8d8",
            backgroundColor: "white",
            borderWidth: 1,
            width: "100%",
            height: 50,
            padding: 5,
          },
          textInput: styles.input,
          listView: styles.listView,
          row: {
            padding: 10,
          },
          separator: styles.separator,
          loader: styles.loader,
        }}
        onPress={(data, details = null) => {
          handlePress({
            latitude: details?.geometry.location.lat!,
            longitude: details?.geometry.location.lng!,
            address: data.description,
          });
        }}
        query={{
          key: api,
          language: "en",
          types: "establishment",
          components: "country:eg",
        }}
        textInputProps={{
          placeholderTextColor: "gray",
          leftIcon: { type: "font-awesome", name: "chevron-left" },
          errorStyle: { color: "red" },
          placeholder: "Where do you want to go?",
        }}
      />
    </TouchableWithoutFeedback>
  );
};

export default GoogleInputSearch;

const styles = StyleSheet.create({
  input: {
    width: "100%",
  },
  listView: {
    position: "absolute",
    top: 50,
    gap: 10,
    padding: 10,
    zIndex: 9999,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  separator: {
    height: 0.5,
    backgroundColor: "#c8c7cc",
  },
  loader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 120,
  },
  textInputContainer: {
    flexDirection: "row",
  },
});
