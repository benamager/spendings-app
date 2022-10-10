/* categorymodal.tsx component style */
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  modal: {
    flex: 1,
    position: "absolute",
    bottom: 30,
    left: 15,
    right: 15,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    zIndex: 10,
  },
  background: {
    backgroundColor: "#00000020",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    marginHorizontal: 25,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#808080",
    textAlign: "center",
    right: 0,
    left: 0,
    position: "absolute",
  },
  innerContainer: {
    marginHorizontal: 35,
    marginBottom: 20,
  },
  label: {
    color: "#808080",
    fontStyle: "italic",
    marginBottom: 5,
  },
  inputs: {
    marginBottom: 45,
  },
  input: {
    backgroundColor: "#ffffff",
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#808080",
  },
  nameInput: {
    width: "81%",
  },
  iconInput: {
    width: "14%",
  },
  flexRowSpace: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default style;
