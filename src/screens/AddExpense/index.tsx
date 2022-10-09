/* addexpense.tsx screen */
import { View, Text, TextInput, Modal, Pressable } from "react-native";
import style from "./style";
import screenWrapper from "../../styles/screenWrapper";
import SpentThisMonth from "../../components/SpentThisMonth";
import Numpad from "../../components/Numpad";
import { useEffect, useState } from "react";
import ButtonComponent from "../../components/ButtonComponent";
import CategoriesModal from "../../components/CategoriesModal";

const date = new Date();
const defaultExpenseData = {
  timestamp: date.getHours() + ":" + date.getMinutes(),
  title: "",
  amount: "",
  categoryIcon: "",
};

const AddExpense = ({ navigation }) => {
  // saving all input data for adding expense
  const [expenseData, setExpenseData] = useState(defaultExpenseData);

  // parseFloat(amount.replace(/\s/g, "").replace(",", ".")),

  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    console.log(expenseData);
  }, [expenseData]);

  // Closing modal and resetting data
  function handleAbort() {
    navigation.navigate("Spendings");
    setShowModal(false);
  }

  return (
    <View style={[style.container, screenWrapper.style]}>
      <CategoriesModal
        showModal={showModal}
        setShowModal={setShowModal}
        expenseData={expenseData}
        setExpenseData={setExpenseData}
      />
      <Text style={style.abort} onPress={() => handleAbort()}>
        Annuler
      </Text>
      <SpentThisMonth
        amount={expenseData.amount}
        header={null}
        underline={true}
        marginTop={120}
      />
      <View style={style.bottom}>
        <View style={style.bottomRow}>
          <Text>I dag kl. {expenseData.timestamp}</Text>
          <ButtonComponent
            title="gem udgift"
            textColor="white"
            bgColor="black"
            onPress={() => navigation.navigate("Spendings")}
          />
        </View>
        <View style={style.bottomRow}>
          <TextInput
            style={style.input}
            onChangeText={(text) =>
              setExpenseData({ ...expenseData, title: text })
            }
            value={expenseData.title}
            placeholder="Navn på udgift, klik"
          />

          <View style={style.categorySelector}>
            {expenseData.categoryIcon && (
              <Text style={style.categoryIcon}>{expenseData.categoryIcon}</Text>
            )}
            <ButtonComponent
              title="vælg kategori"
              textColor="black"
              bgColor="white"
              onPress={() => setShowModal(!showModal)}
            />
          </View>
        </View>
        <Numpad expenseData={expenseData} setExpenseData={setExpenseData} />
      </View>
    </View>
  );
};

export default AddExpense;
