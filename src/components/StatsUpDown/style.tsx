/* SpentThisMonth.tsx component style */
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#808080",
    fontSize: 16,
    fontWeight: "300",
  },
  icon: {
    fontSize: 24,
    marginLeft: 10,
  },
  percent: {
    marginLeft: 3,
    fontWeight: "700",
    fontSize: 16,
  },
  colorDown: {
    color: "green",
  },
  colorUp: {
    color: "#DA3E52",
  },
});

export default style;
