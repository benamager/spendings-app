/* SpentThisMonth.tsx component */
import { View, Text } from "react-native";
import style from "./style";

const SpentThisMonth = () => {
  return (
    <View style={style.container}>
      <Text style={style.spentText}>Brugt denne måned</Text>
      <View style={style.amountContainer}>
        <Text style={style.currency}>DKK</Text>
        <Text style={style.amount}>
          3750<Text style={style.amountDecimals}>.50</Text>
        </Text>
      </View>
    </View>
  );
};

export default SpentThisMonth;
