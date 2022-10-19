/* SpentThisMonth.tsx component */
import { View, Text } from "react-native";
import style from "./style";

const SpentThisMonth = ({
  amount,
  header,
  underline,
  marginTop,
  alignSelf,
  valuta,
  valutaRight,
}) => {
  let [amountBeforeDecimals, amountDecimals] = amount.toString().split(".");
  // If amount before decimals is empty then add 0 placeholder
  amountBeforeDecimals = amountBeforeDecimals ? amountBeforeDecimals : "0";
  // If there are no decimals, set the decimals to 00
  amountDecimals = amountDecimals ? amountDecimals : "00";
  // If there are only one decimal, add a 0 to the end
  amountDecimals =
    amountDecimals.length === 1 ? amountDecimals + "0" : amountDecimals;

  return (
    <View style={{ marginTop: marginTop, alignSelf: alignSelf }}>
      {header && <Text style={style.spentText}>{header}</Text>}
      <View
        style={[
          style.spentContainer,
          underline ? style.underline : null,
          { flexDirection: valutaRight ? "row-reverse" : "row" },
        ]}
      >
        <Text style={valutaRight ? style.currencyRight : style.currencyLeft}>
          {valuta}
        </Text>
        <View style={style.amountContainer}>
          <Text style={style.amount}>{amountBeforeDecimals}</Text>
          <Text style={style.amountDecimals}>.{amountDecimals}</Text>
        </View>
      </View>
    </View>
  );
};

SpentThisMonth.defaultProps = {
  valutaRight: false,
};

export default SpentThisMonth;
