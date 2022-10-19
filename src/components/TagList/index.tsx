/* tagList.tsx component (requires button component) */

import { View, StyleSheet } from "react-native";
import ButtonComponent from "../ButtonComponent";

const TagList = ({ tags, gap, activeTag, setActiveTag }) => {
  return (
    <View style={{ flexDirection: "column" }}>
      {tags.map((tag: string, i: number) => {
        const textColor = tag === activeTag ? "#ffffff" : "#000000";
        const bgColor = tag === activeTag ? "#000000" : "#ffffff";

        return (
          <ButtonComponent
            key={i}
            title={tag}
            textColor={textColor}
            bgColor={bgColor}
            onPress={() => setActiveTag(tag)}
            styleProp={{
              alignSelf: "flex-end",

              marginBottom: i !== tags.length - 1 ? gap : 0,
            }}
          />
        );
      })}
    </View>
  );
};

export default TagList;
