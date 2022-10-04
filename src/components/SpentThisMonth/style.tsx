/* SpentThisMonth.tsx component style */
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  spentText: {
    color: "#808080",
    fontWeight: "300",
    alignSelf: "center",
  },
  spentContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
  },
  currency: {
    color: "#808080",
    fontWeight: "300",
    fontStyle: "italic",
    marginRight: 6,
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
