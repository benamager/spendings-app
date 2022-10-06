/* SpentListItem.tsx component style */
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  categoryIcon: {
    fontSize: 28,
    marginLeft: -45,
    marginRight: 15,
  },
  title: {
    fontWeight: "500",
    marginBottom: 5,
  },
  category: {
    color: "#808080",
  },
  amount: {
    marginLeft: "auto",
    fontWeight: "500",
  },
});

export default style;
