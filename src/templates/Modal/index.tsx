import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import style from "./style";
import { useState } from "react";

const Modal = ({
  title,
  leftText,
  right,
  showModal,
  setShowModal,
  children,
}) => {
  const [innerContainerLayout, setInnerContainerLayout] = useState(null);
  const handleContainerClick = (evt: any) => {
    // If clicked above the inner container,
    if (evt.nativeEvent.pageY < innerContainerLayout.y) {
      setShowModal(false);
    }
  };

  return (
    showModal && (
      <Pressable
        style={style.background}
        onPress={(evt) => handleContainerClick(evt)}
      >
        <View
          onLayout={(evt) => setInnerContainerLayout(evt.nativeEvent.layout)}
          style={style.innerContainer}
        >
          <View>
            <Text style={style.leftText}>{leftText}</Text>
            <Text style={style.headerTitle}>{title}</Text>
            <Ionicons style={style.rightIcon} name="add" size={30} />
          </View>
          <View>{children}</View>
        </View>
      </Pressable>
    )
  );
};

export default Modal;
