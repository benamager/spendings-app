/* Imports */
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/routes/BottomTabNavigator";

/* Main app */
export default function App() {
  const date: any = new Date();
  //console.log(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())

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
  );
}
