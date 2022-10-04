/* MonthSelector.tsx component style */
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 45,
    alignItems: "center",
  },
  icons: {
    fontSize: 20,
    padding: 6,
  },
  monthText: {
    fontSize: 16,
    borderWidth: 1,
    paddingVertical: 5,
    marginHorizontal: 4,
    borderRadius: 18,
    textTransform: "uppercase",
    width: 180,
    textAlign: "center",
  },
});

export default style;
