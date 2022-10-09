/* addexpense.tsx screen */
import { View, Text, TextInput } from "react-native";
import style from "./style";
import screenWrapper from "../../styles/screenWrapper";
import SpentThisMonth from "../../components/SpentThisMonth";
import Numpad from "../../components/Numpad";
import { useEffect, useState } from "react";
import ButtonComponent from "../../components/ButtonComponent";
import Modal from "../../templates/Modal";

const AddExpense = ({ navigation }) => {
  // the amount shown in spentThisMonth component
  const [amount, setAmount] = useState("0");

  // when amount change parseint it and set it to data
  useEffect(() => {
    console.log(parseFloat(amount.replace(/\s/g, "").replace(",", ".")));
  }, [amount]);

  const [showModal, setShowModal] = useState(false);

  return (
    <View style={[style.container, screenWrapper.style]}>
      <Modal
        leftText="Annuller"
        title="Kategorier"
        right="+"
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <Text>HALLO</Text>
      </Modal>

      <Text
        style={style.abort}
        onPress={() => navigation.navigate("Spendings")}
      >
        Annuler
      </Text>
      <SpentThisMonth
        amount={amount}
        header={null}
        underline={true}
        marginTop={120}
      />
      <View style={style.bottom}>
        <View style={style.bottomRow}>
          <Text>I dag kl. 20.09.</Text>
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
            value={null}
            placeholder="Navn på udgift, klik"
          />
          <ButtonComponent
            title="vælg kategori"
            textColor="black"
            bgColor="white"
            onPress={() => setShowModal(true)}
          />
        </View>
        <Numpad amount={amount} setAmount={setAmount} />
      </View>
    </View>
  );
};

export default AddExpense;
