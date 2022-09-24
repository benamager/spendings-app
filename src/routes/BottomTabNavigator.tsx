import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Text, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

import Spendings from "../screens/Spendings"
import Stats from "../screens/Stats"
import Settings from "../screens/Settings"

// Icons for the bottom tab navigator (all ionicons)
// Spendings: ios-card ios-card-outline
// Stats: ios-stats-chart ios-stats-chart-outline
// Settings: ios-settings ios-settings-outline
// Add spending: add-circle add-circle-outline
// Icon component example: <Ionicons name="ios-card" size={24} color="black" />

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any
          let rn = route.name
          if (rn === "Spendings") {
            iconName = focused ? "ios-card" : "ios-card-outline"
          } else if (rn === "Stats") {
            iconName = focused ? "ios-stats-chart" : "ios-stats-chart-outline"
          } else if (rn === "Settings") {
            iconName = focused ? "ios-settings" : "ios-settings-outline"
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />
        },
        // Hides the appbar
        headerShown: false,
      })}
    >
      <Tab.Screen name="Spendings" component={Spendings} />
      <Tab.Screen name="Stats" component={Stats} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default BottomTabNavigator
