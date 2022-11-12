/* spendingstable.tsx row sub component */
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import rowDefault from "./rowDefaultStyle";

const rowHeader = () => {
  return (
    <View style={style.container}>
      <View style={[rowDefault.col, rowDefault.col1]}></View>
      <View style={[rowDefault.col, rowDefault.col2, rowDefault.bottomBorder]}>
        <Text style={style.text}>Kategori</Text>
      </View>
      <View style={[rowDefault.col, rowDefault.col3, rowDefault.bottomBorder]}>
        <Text style={style.text}>Procent</Text>
      </View>
      <View style={[rowDefault.col, rowDefault.col4, rowDefault.bottomBorder]}>
        <Text style={style.text}>Brugt</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 30,
  },
  text: {
    fontSize: 14,
    color: "#808080",
  },
});

export default rowHeader;
