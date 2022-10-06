/* numpad.tsx component style */
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    alignSelf: "center",
    marginHorizontal: 30,
  },
  numCol: {
    flexDirection: "column",
  },
  numElement: {
    fontSize: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    textAlign: "center",
  },
  centerElement: {
    textAlign: "center",
  },
});

export default style;
