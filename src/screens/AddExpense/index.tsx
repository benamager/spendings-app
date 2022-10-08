/* addexpense.tsx screen */
import { View, Text, TextInput } from "react-native";
import style from "./style";
import screenWrapper from "../../styles/screenWrapper";
import SpentThisMonth from "../../components/SpentThisMonth";
import Numpad from "../../components/Numpad";
import { useEffect, useState } from "react";
import ButtonComponent from "../../components/ButtonComponent";

const AddExpense = ({ navigation }) => {
  // the amount shown in spentThisMonth component
  const [amount, setAmount] = useState("0");

  // all data for saving the expense
  const [data, setData] = useState({
    amount: 0,
    category: "",
    title: "",
    timeStamp: "",
  });

  // when amount change parseint it and set it to data
  useEffect(() => {
    setData({
      ...data,
      amount: parseFloat(amount.replace(/\s/g, "").replace(",", ".")),
    });
  }, [amount]);

  return (
    <View style={[style.container, screenWrapper.style]}>
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
            onPress={() => console.log("pressed")}
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
            onPress={() => console.log("pressed")}
          />
        </View>
        <Numpad amount={amount} setAmount={setAmount} />
      </View>
    </View>
  );
};

export default AddExpense;
