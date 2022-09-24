/* Imports */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
/* Screens */
import Spendings from "../screens/Spendings"
import Stats from "../screens/Stats"
import Settings from "../screens/Settings"

const Tab = createBottomTabNavigator()

// The bottom tab navigator component (routing elements)
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
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
          return (
            <Ionicons
              name={iconName}
              size={size}
              color={focused ? "#000000" : "#00000050"}
            />
          )
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

export default BottomTabNavigator
