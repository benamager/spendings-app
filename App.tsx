/* App.tsx */
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import BottomTabNavigator from "./src/routes/BottomTabNavigator"

import Spendings from "./src/screens/Spendings"

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}
