import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import SettingsScreen from "../Screens/SettingsScreen";
import FindRideScreen from "../Screens/FindRideScreen";
import PickDriverScreen from "../Screens/FindDriverScreen";
import FindDriverScreen from "../Screens/FindDriverScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabIcon = ({
  focused,
  color,
  size,
  name,
}: {
  focused: boolean;
  color: string;
  size: number;
  name: any;
}) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderColor: focused ? "white" : "black",
      width: 50,
      height: 50,
      borderRadius: 50,
      backgroundColor: focused ? "#e1dfdf" : "black",
    }}
  >
    <Text
      style={{
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <AntDesign
        name={name}
        size={size}
        color={focused ? "black" : "white"}
        borderRadius={50}
      />
    </Text>
  </View>
);

const HomeScreenRoutes = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FindRideScreen" component={FindRideScreen} />
      <Stack.Screen
        options={{ headerShown: false, presentation: "modal" }}
        name="DriverScreen"
        component={FindDriverScreen}
      />
    </Stack.Navigator>
  );
};

const ProtectesRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
          borderRadius: 40,
          width: "95%",
          overflow: "hidden",
          marginHorizontal: "2.5%",
          marginBottom: 10,
          position: "absolute",
          bottom: 0,
          paddingHorizontal: 10,
          paddingVertical: 10,
          paddingBottom: 10,
          paddingTop: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        headerShadowVisible: false,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="HomeRoutes"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              focused={focused}
              color={color}
              size={size}
              name={"home"}
            />
          ),
        }}
        component={HomeScreenRoutes}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              focused={focused}
              color={color}
              size={size}
              name={"setting"}
            />
          ),
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default ProtectesRoutes;

const styles = StyleSheet.create({});
