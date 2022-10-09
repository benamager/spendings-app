/* numpad.tsx component */
import { Text, View, Button } from "react-native";
import style from "./style";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Numpad = ({ expenseData, setExpenseData }) => {
  const amount = expenseData.amount;

  const addNumber = (number: string) => {
    // No more than 2 decimals
    let amountAfterDecimals = amount.split(".")[1];
    if (amountAfterDecimals && amountAfterDecimals.length >= 2) {
      return;
    }
    // client cannot add more than 2 decimals
    if (number === "." && amount.includes(".")) {
      return;
    }
    // if account is empty, we don't want to add a 0 before the number
    if (amount === "0") {
      setExpenseData(number);
      return;
    }
    setExpenseData({ ...expenseData, amount: amount + number });
  };

  // remove last character
  const removeNumber = () => {
    // Remove extra character if there is a decimal
    let amountAfterDecimals = amount.split(".")[1];
    if (amountAfterDecimals && amountAfterDecimals.length == 1) {
      setExpenseData({ ...expenseData, amount: amount.slice(0, -2) });
      return;
    }
    setExpenseData({ ...expenseData, amount: amount.slice(0, -1) });
  };

  return (
    <View style={style.container}>
      <View style={style.numCol}>
        <Text onPress={() => addNumber("7")} style={style.numElement}>
          7
        </Text>
        <Text onPress={() => addNumber("4")} style={style.numElement}>
          4
        </Text>
        <Text onPress={() => addNumber("1")} style={style.numElement}>
          1
        </Text>
        <Text onPress={() => addNumber(".")} style={style.numElement}>
          .
        </Text>
      </View>
      <View style={style.numCol}>
        <Text onPress={() => addNumber("8")} style={style.numElement}>
          8
        </Text>
        <Text onPress={() => addNumber("5")} style={style.numElement}>
          5
        </Text>
        <Text onPress={() => addNumber("2")} style={style.numElement}>
          2
        </Text>
        <Text onPress={() => addNumber("0")} style={style.numElement}>
          0
        </Text>
      </View>
      <View style={style.numCol}>
        <Text onPress={() => addNumber("9")} style={style.numElement}>
          9
        </Text>
        <Text onPress={() => addNumber("6")} style={style.numElement}>
          6
        </Text>
        <Text onPress={() => addNumber("3")} style={style.numElement}>
          3
        </Text>
        <Ionicons
          style={style.numElement}
          size={38}
          name={"backspace-outline"}
          onPress={() => removeNumber()}
        />
      </View>
    </View>
  );
};

export default Numpad;
