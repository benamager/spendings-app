/* addexpense.tsx screen style */
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  abort: {
    color: "#808080",
  },
  bottom: {
    position: "absolute",
    width: "100%",
    alignSelf: "center",
    bottom: 35,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    borderBottomWidth: 1,
  },
  input: {
    width: "45%",
  },
});

export default style;
