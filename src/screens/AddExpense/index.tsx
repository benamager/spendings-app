/* addexpense.tsx screen */
import { View, Text, Button } from "react-native";
import style from "./style";
import screenWrapper from "../../styles/screenWrapper";
import SpentThisMonth from "../../components/SpentThisMonth";
import Numpad from "../../components/Numpad";
import { useEffect, useState } from "react";
import ButtonComponent from "../../components/ButtonComponent";

const AddExpense = ({ navigation }) => {
  const [amount, setAmount] = useState("0");

  // Parsing the string amount to integer
  //console.log(parseFloat(amount.replace(/\s/g, "").replace(",", ".")));

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
        <ButtonComponent
          title="gem udgift"
          textColor="white"
          bgColor="black"
          onPress={() => console.log("pressed")}
        />
        <ButtonComponent
          title="vælg kategori"
          textColor="black"
          bgColor="white"
          onPress={() => console.log("pressed")}
        />
        <Numpad amount={amount} setAmount={setAmount} />
      </View>
    </View>
  );
};

export default AddExpense;
