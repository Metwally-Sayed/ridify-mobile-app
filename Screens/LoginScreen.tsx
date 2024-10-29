import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

type Props = {};

const LoginScreen = (props: Props) => {
  const navigation = useNavigation();

  const backHandler = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "WelcomeScreen" }],
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{ padding: 20, flex: 1 }}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ flex: 1, width: "100%" }}
            >
              <View>
                <CustomInput
                  title="Enter your mobile number"
                  keyboardType={"numeric"}
                />
                <CustomButton
                  onPress={() => {}}
                  color="white"
                  backgroundColor="black"
                >
                  Continue
                </CustomButton>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
        <View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              columnGap: 10,
            }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: "#d8d8d8" }} />
            <Text>Or</Text>
            <View style={{ flex: 1, height: 1, backgroundColor: "#d8d8d8" }} />
          </View>
        </View>
        <View style={{ padding: 20, flex: 1 }}>
          <View>
            <CustomButton
              color="black"
              backgroundColor="#f5f5f5"
              iconeLeft="google"
              onPress={() => {}}
            >
              Google
            </CustomButton>
            <CustomButton
              color="black"
              backgroundColor="#f5f5f5"
              iconeLeft="apple1"
              onPress={() => {}}
            >
              Apple
            </CustomButton>
            <CustomButton
              color="black"
              iconeLeft="mail"
              backgroundColor="#f5f5f5"
              onPress={() => {}}
            >
              Email
            </CustomButton>
          </View>
        </View>
        <View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              columnGap: 10,
            }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: "#d8d8d8" }} />
            <Text>Or</Text>
            <View style={{ flex: 1, height: 1, backgroundColor: "#d8d8d8" }} />
          </View>
        </View>
        <View
          style={{
            padding: 20,
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <View>
            <CustomButton
              color="black"
              backgroundColor="white"
              iconeLeft="search1"
              onPress={() => {}}
            >
              Find my account
            </CustomButton>
          </View>
          <View
            style={{
              marginBottom: 20,
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <CustomButton
              color="black"
              backgroundColor="white"
              iconeLeft="left"
              onPress={backHandler}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  section: {
    padding: 20,
    height: "25%",
  },
});
