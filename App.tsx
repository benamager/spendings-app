/* Imports */
import { NavigationContainer } from "@react-navigation/native"
import BottomTabNavigator from "./src/routes/BottomTabNavigator"
import { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

/* Main app */
export default function App() {
  const date: any = new Date()
  //console.log(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())

  const setStringValue = async (value: any) => {
    try {
      await AsyncStorage.setItem("key", value)
    } catch (e) {
      // save error
    }

    console.log("Done.")
  }
  setStringValue("Hello World")

  const getMyStringValue = async () => {
    try {
      return await AsyncStorage.getItem("key")
    } catch (e) {
      // read error
    }

    console.log("Done.")
  }
  console.log(getMyStringValue())

  // const [data, setData] = useState({
  //   "2022": {
  //     "9": {
  //       "24": {
  //         title: "My Birthday",
  //         description: "I'm turning 18",
  //         category: "mad",
  //       },
  //     },
  //   },
  // })

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}
