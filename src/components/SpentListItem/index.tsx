/* SpentListItem.tsx component */
import { View, Text } from "react-native";
import style from "./style";

const SpentListItem = ({ category, price, title }) => {
  return (
    <View style={style.container}>
      <Text style={style.categoryIcon}>🍔</Text>
      <View>
        <Text style={style.title}>{title}</Text>
        <Text style={style.category}>{category}</Text>
      </View>
      <Text style={style.amount}>{price} DKK</Text>
    </View>
  );
};

export default SpentListItem;
