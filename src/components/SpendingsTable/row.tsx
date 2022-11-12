/* spendingstable.tsx row sub component */
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import rowDefault from "./rowDefaultStyle";

const row = ({ categoryIcon, category, percent, spent, total }) => {
  return (
    <View style={style.container}>
      <View style={[rowDefault.col, rowDefault.col1]}>
        <Text style={[style.text, style.icon]}>{categoryIcon}</Text>
      </View>
      <View style={[rowDefault.col, rowDefault.col2, rowDefault.bottomBorder]}>
        <Text style={style.text}>{category}</Text>
      </View>
      <View style={[rowDefault.col, rowDefault.col3, rowDefault.bottomBorder]}>
        <Text style={style.text}>{percent}</Text>
      </View>
      <View style={[rowDefault.col, rowDefault.col4, rowDefault.bottomBorder]}>
        <Text style={style.text}>{spent}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 55,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
  },
  icon: {
    fontSize: 25,
  },
});

export default row;
