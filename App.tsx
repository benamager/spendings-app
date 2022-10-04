/* app.tsx */

import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/routes/BottomTabNavigator";

export default function App() {
  const date: any = new Date();
  //console.log(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
