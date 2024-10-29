import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IRideHistory } from "../utils/dummy";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { formatDate } from "../utils/helpers";

type Props = {
  item: IRideHistory;
};

const REACT_APP_MAPS_API_KEY = "188d847d13e745da82da2ef84e649a85";

const RideCardHistory = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", flexDirection: "row" }}>
        <Image
          style={{ width: 80, height: 80, borderRadius: 10 }}
          source={{
            uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=600&height=400&center=lonlat:${item.destination_longitude},${item.destination_latitude}&zoom=14&apiKey=${REACT_APP_MAPS_API_KEY}`,
          }}
        />
        <View
          style={{
            marginLeft: 10,
            height: 80,
            flex: 1,
            justifyContent: "space-evenly",
          }}
        >
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Text>
              <FontAwesome6 name="location-arrow" size={20} color="black" />{" "}
            </Text>
            <Text
              style={{
                gap: 20,
                fontSize: 15,
              }}
            >
              {item.origin_address}
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Text>
              <FontAwesome6 name="location-dot" size={20} color="black" />{" "}
            </Text>
            <Text
              style={{
                gap: 20,
                fontSize: 15,
              }}
            >
              {item.destination_address}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "300", color: "gray" }}>
          Date & Time
        </Text>
        <Text style={{ fontSize: 15, color: "gray" }}>
          {formatDate(item.created_at)}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "300", color: "gray" }}>
          Driver
        </Text>
        <Text style={{ fontSize: 15, color: "gray" }}>
          {item.driver.first_name} {item.driver.last_name}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "300", color: "gray" }}>
          Car Seats
        </Text>
        <Text style={{ fontSize: 15, color: "gray" }}>
          {item.driver.car_seats}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "300", color: "gray" }}>
          Payment Status
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: item.payment_status === "paid" ? "green" : "red",
          }}
        >
          {item.payment_status.toUpperCase()}
        </Text>
      </View>
    </View>
  );
};

export default RideCardHistory;

const styles = StyleSheet.create({
  container: {
    height: 240,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    elevation: 10,
    backgroundColor: "#fff",
    padding: 15,
    marginTop: 10,
    marginHorizontal: 12,
    overflow: "hidden",
    borderRadius: 10,
  },
});
