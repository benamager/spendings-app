/* Modal.tsx template style */
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 100,
    backgroundColor: "#00000030",
  },
  innerContainer: {
    position: "absolute",
    backgroundColor: "#ffffff",
    left: 15,
    right: 15,
    bottom: 30,
    height: 320,
    borderRadius: 30,
    zIndex: 1000,
  },
  leftText: {
    position: "absolute",
    left: 0,
    paddingLeft: 20,
    paddingTop: 20,
  },
  headerTitle: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    marginTop: 18,
  },
  rightIcon: {
    position: "absolute",
    paddingRight: 20,
    paddingTop: 16,
    right: 0,
  },
});

export default style;
