/* settingsRow.tsx component */

import { View, Text, Button, Switch } from "react-native";
import style from "./style";
import { useState } from "react";

const SettingsRow = ({ title, desc, name }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={style.container}>
      <View style={style.content}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.description}>{desc}</Text>
      </View>
      <Switch
        trackColor={{ false: "#3e3e3e", true: "#76bb2d" }}
        thumbColor={true ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setIsEnabled(!isEnabled)}
        value={isEnabled}
      />
    </View>
  );
};

export default SettingsRow;
