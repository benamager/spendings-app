/* app.tsx */

import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/routes/BottomTabNavigator";

import useGetStorage from "./src/hooks/useGetStorage";
import useSaveStorage from "./src/hooks/useSaveStorage";
import useTime from "./src/hooks/useTime";
import { useEffect } from "react";

export default function App() {
  const { data, error, loading } = useGetStorage("months");

  const Time = useTime("yearMonth");
  console.log(Time);

  if (data === null) {
    console.log("data doesn't exist");
  }
  //useSaveStorage("user", { name: "John", age: 30 });

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
