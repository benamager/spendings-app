/* SpentListItem.tsx component */
import { View, Text } from "react-native";
import style from "./style";

const SpentListItem = ({ category, price, title }) => {
  return (
    <View style={style.container}>
      <Text style={{ color: "red" }}>🍔</Text>
      <View>
        <Text>Kantine mad</Text>
        <Text>Mad og drikke</Text>
      </View>
      <Text>50 DKK</Text>
    </View>
  );
};

export default SpentListItem;
