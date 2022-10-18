/* tagList.tsx component (requires button component) */

import { View, StyleSheet } from "react-native";
import ButtonComponent from "../ButtonComponent";
import style from "./style";

const TagList = ({ tags, activeTag, setActiveTag }) => {
  return (
    <View style={style.container}>
      {tags.map((tag: string) => {
        const textColor = tag === activeTag ? "#ffffff" : "#000000";
        const bgColor = tag === activeTag ? "#000000" : "#ffffff";

        return (
          <ButtonComponent
            title={tag}
            textColor={textColor}
            bgColor={bgColor}
            onPress={() => setActiveTag(tag)}
          />
        );
      })}
    </View>
  );
};

export default TagList;
