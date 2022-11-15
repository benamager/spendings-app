/* app.tsx */

import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/routes/BottomTabNavigator";

import getObject from "./src/functions/getObject";

export default function App() {
  const date: any = new Date();
  //console.log(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());

  getObject("yooo").then((res) => {
    console.log(res.data);
  });

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
