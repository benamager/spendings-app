/* settingsrow.tsx component style */
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomColor: "#00000050",
  },
  content: {
    width: "80%",
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "600",
  },
  description: {
    fontSize: 15,
    color: "#808080",
    fontWeight: "500",
  },
});

export default style;
