import { StyleSheet } from "react-native";

const rowDefault = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  col: {
    justifyContent: "center",
  },
  col1: {
    width: "13.5%",
    alignItems: "center",
  },
  col2: {
    width: "39.5%",
  },
  col3: {
    width: "21.8%",
    alignItems: "flex-end",
  },
  col4: {
    width: "25.2%",
    alignItems: "flex-end",
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#80808050",
  },
});

export default rowDefault;
