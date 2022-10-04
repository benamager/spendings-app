/* SpentThisMonth.tsx component style */
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    marginTop: 50,
    alignSelf: "center",
  },
  spentText: {
    color: "#808080",
    fontWeight: "300",
    alignSelf: "center",
  },
  amountContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  currency: {
    color: "#808080",
    fontWeight: "300",
    fontStyle: "italic",
  },
  amount: {
    fontSize: 38,
    fontWeight: "700",
  },
  amountDecimals: {
    fontSize: 24,
  },
});

export default style;
