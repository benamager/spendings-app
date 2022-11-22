/* app.tsx */

import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/routes/BottomTabNavigator";
import useOnLoadStorage from "./src/hooks/useOnLoadStorage";

export default function App() {
  // checks if first installation, if so, sets up storage
  // if not, then is new month? if so, then sets up new month
  useOnLoadStorage();

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
