/* buttonComponent.tsx component */

import { View, Text, Button, Pressable } from "react-native";
import style from "./style";

const ButtonComponent = ({ title, onPress, textColor, bgColor, styleProp }) => {
  return (
    <Pressable
      style={[style.button, { backgroundColor: bgColor }, styleProp]}
      onPress={onPress}
    >
      <Text style={[style.text, { color: textColor }]}>{title}</Text>
    </Pressable>
  );
};

export default ButtonComponent;
