/* Imports */
import { View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

// Spendings page
const Spendings = () => {
  const setStringValue = async (value: any) => {
    try {
      await AsyncStorage.setItem("key", value);
    } catch (e) {
      // save error
    }

    console.log("Now sat item to async storage");
  };

  const getMyStringValue = async () => {
    try {
      const value = await AsyncStorage.getItem("key");
      console.log(value);
    } catch (e) {
      // read error
    }
  };

  return (
    <View style={{ backgroundColor: "#f1f1f1", height: "100%" }}>
      <Text style={{ fontSize: 25, textAlign: "center", marginTop: 70 }}>
        Spendings
      </Text>
      <Button
        title="add to localstorage"
        onPress={() => setStringValue("Hello World")}
      />
      <Button
        title="get from local storage"
        onPress={() => getMyStringValue()}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default Spendings;
