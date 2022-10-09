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
  modal: {
    flex: 1,
    position: "absolute",
    bottom: 30,
    left: 15,
    right: 15,
    height: 300,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    zIndex: 10,
  },
  background: {
    backgroundColor: "#00000020",
    position: "absolute",
    top: "-100%",
    right: 0,
    bottom: 0,
    left: 0,
  },
});

export default style;
