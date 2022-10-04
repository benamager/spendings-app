/* SpentThisMonth.tsx component */
import { View, Text } from "react-native";
import style from "./style";

const SpentThisMonth = ({ amount, header, underline, marginTop }) => {
  let [amountBeforeDecimals, amountDecimals] = amount.toString().split(".");
  // If there are no decimals, set the decimals to 00
  amountDecimals = amountDecimals ? amountDecimals : "00";
  // If there are only one decimal, add a 0 to the end
  amountDecimals =
    amountDecimals.length === 1 ? amountDecimals + "0" : amountDecimals;

  return (
    <View style={[style.container, { marginTop: marginTop }]}>
      {header && <Text style={style.spentText}>{header}</Text>}
      <View style={[style.spentContainer, underline ? style.underline : null]}>
        <Text style={style.currency}>DKK</Text>
        <View style={style.amountContainer}>
          <Text style={style.amount}>{amountBeforeDecimals}</Text>
          <Text style={style.amountDecimals}>.{amountDecimals}</Text>
        </View>
      </View>
    </View>
  );
};

export default SpentThisMonth;
