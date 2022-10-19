import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import style from "./style";

//Ionicons names up: arrow-up-circle && arrow-down-circle

const StatsUpDown = ({ activeTag, up }) => {
  const iconName = up ? "arrow-up-circle" : "arrow-down-circle";
  const color = up ? style.colorUp : style.colorDown;

  return (
    <View style={style.container}>
      <Text style={style.text}>
        Total brugt denne {activeTag.toLowerCase()}
      </Text>
      <Ionicons name={iconName} style={[style.icon, color]} />
      <Text style={[style.percent, color]}>20%</Text>
    </View>
  );
};

export default StatsUpDown;
