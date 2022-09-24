/* Imports */
import { View, Text } from "react-native"
import { StatusBar } from "expo-status-bar"

// Settings page
const Settings = () => {
  return (
    <View style={{ backgroundColor: "#f1f1f1", height: "100%" }}>
      <Text style={{ fontSize: 25, textAlign: "center", marginTop: 70 }}>
        Settings
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Settings
