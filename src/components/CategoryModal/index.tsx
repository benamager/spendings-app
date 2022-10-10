/* categorymodal.tsx screen */
import { View, Text, Modal, Pressable, TextInput } from "react-native";
import style from "./style";
import { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";

const CategoryModal = ({ showModals, setShowModals }) => {
  return (
    <Modal visible={showModals.category} transparent={true}>
      <Pressable
        style={style.background}
        onPress={() =>
          setShowModals({ ...showModals, category: false, categories: true })
        }
      ></Pressable>
      <View style={style.modal}>
        <View style={style.modalHeader}>
          <Text style={style.modalTitle}>Tilføjer ny kategori</Text>
        </View>
        <View style={style.innerContainer}>
          <View>
            <View style={style.flexRowSpace}>
              <Text style={style.label}>Navn på kategori</Text>
              <Text style={style.label}>Kategori ikon</Text>
            </View>
            <View style={[style.flexRowSpace, style.inputs]}>
              <TextInput style={[style.input, style.nameInput]} />
              <TextInput style={[style.input, style.iconInput]} />
            </View>
          </View>
          <View style={style.flexRowSpace}>
            <ButtonComponent
              title="Annuller"
              textColor="black"
              bgColor="white"
              onPress={() =>
                setShowModals({
                  ...showModals,
                  category: false,
                  categories: true,
                })
              }
            />
            <ButtonComponent
              title="Gem ny kategori"
              textColor="white"
              bgColor="black"
              onPress={() => console.log("gem")}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CategoryModal;
