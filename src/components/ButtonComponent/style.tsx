/* buttonComponent.tsx component style */
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  button: {
    borderWidth: 1,
    alignSelf: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  text: {
    textTransform: "uppercase",
    fontWeight: "500",
  },
});

export default style;
