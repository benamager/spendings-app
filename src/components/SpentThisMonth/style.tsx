/* SpentThisMonth.tsx component style */
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  spentText: {
    color: "#808080",
    fontWeight: "300",
    textAlign: "center",
  },
  spentContainer: {
    marginTop: 10,
    justifyContent: "center",
  },
  currencyLeft: {
    color: "#808080",
    fontWeight: "300",
    fontStyle: "italic",
    marginRight: 6,
  },
  currencyRight: {
    fontSize: 38,
    fontWeight: "600",
    marginTop: -5,
    marginLeft: 12,
  },
  amountContainer: {
    flexDirection: "row",
  },
  amount: {
    fontSize: 38,
    fontWeight: "700",
    marginTop: -5,
  },
  amountDecimals: {
    fontSize: 24,
    fontWeight: "700",
  },
  underline: {
    borderBottomWidth: 1,
    borderColor: "#80808050",
  },
});

export default style;
