/* categoriesmodal.tsx screen */
import { View, Text, Modal, Pressable, ScrollView } from "react-native";
import style from "./style";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const categoryData = [
  {
    name: "Mad",
    icon: "🍔",
  },
  {
    name: "Tjente Penge",
    icon: "💸",
  },
  {
    name: "Tjente Penge",
    icon: "💸",
  },
  {
    name: "Tjente Penge",
    icon: "💸",
  },
  {
    name: "Tjente Penge",
    icon: "💸",
  },
  {
    name: "Tjente Penge",
    icon: "💸",
  },
  {
    name: "Tjente Penge",
    icon: "💸",
  },
  {
    name: "Tjente Penge",
    icon: "💸",
  },
  {
    name: "Tjente Penge",
    icon: "💸",
  },
  {
    name: "Tjente Penge",
    icon: "💸",
  },
  {
    name: "Tjente Penge",
    icon: "💸",
  },
];

const CategoriesModal = ({
  showModal,
  setShowModal,
  expenseData,
  setExpenseData,
}) => {
  // Closing modal and saving category icon and name to expenseData
  const pickCategory = (category: any) => {
    setExpenseData({ ...expenseData, categoryIcon: category.icon });
    setShowModal(!showModal);
  };

  return (
    <Modal visible={showModal} transparent={true}>
      <Pressable
        style={style.background}
        onPress={() => setShowModal(!showModal)}
      ></Pressable>
      <View style={style.modal}>
        <View style={style.modalHeader}>
          <Text style={style.modalLeftText}>Annuller</Text>
          <Text style={style.modalTitle}>Kategorier</Text>
          <Ionicons name="add" size={30} color="#808080" />
        </View>
        <ScrollView contentContainerStyle={style.categoriesContainer}>
          {categoryData.map((category, i) => {
            return (
              <Pressable
                style={style.categoryElement}
                onPress={() => pickCategory(category)}
                onLongPress={() => console.log("longPressed")}
                key={i}
              >
                <Text style={style.categoryIcon}>{category.icon}</Text>
                <Text style={style.categoryName}>{category.name}</Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default CategoriesModal;
