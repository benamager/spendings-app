/* Imports */
import { NavigationContainer } from "@react-navigation/native"
import BottomTabNavigator from "./src/routes/BottomTabNavigator"

/* Main app */
export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// })
