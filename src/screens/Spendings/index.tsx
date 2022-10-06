/* spendings.tsx screen */
import { View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import style from "./style";
import screenWrapper from "../../styles/screenWrapper";
import MonthSelector from "../../components/MonthSelector";
import SpentThisMonth from "../../components/SpentThisMonth";
import DaysFlatList from "../../templates/DaysFlatList";
import AddExpense from "../../components/AddExpense";

import saveObject from "../../functions/saveObject";
import getObject from "../../functions/getObject";

// Spendings page
const Spendings = () => {
  const november = [
    {
      day: 1,
      events: [
        {
          title: "Pizza og dåse",
          price: -75,
          category: "Mad og drikke",
        },
        {
          title: "Pizza og dåse",
          price: 100,
          category: "Mad og drikke",
        },
        {
          title: "Netto",
          price: 750,
          category: "Indkøb",
        },
      ],
    },
    {
      day: 2,
      events: [
        {
          title: "Pizza og dåse",
          price: 75,
          category: "Mad og drikke",
        },
      ],
    },
    {
      day: 5,
      events: [
        {
          title: "Pizza og dåse",
          price: 75,
          category: "Mad og drikke",
        },
      ],
    },
    {
      day: 10,
      events: [
        {
          title: "Pizza og dåse",
          price: -75,
          category: "Mad og drikke",
        },
        {
          title: "Pizza og dåse",
          price: 100,
          category: "Mad og drikke",
        },
        {
          title: "Netto",
          price: 750,
          category: "Indkøb",
        },
      ],
    },
    {
      day: 15,
      events: [
        {
          title: "Pizza og dåse",
          price: -75,
          category: "Mad og drikke",
        },
        {
          title: "Pizza og dåse",
          price: 100,
          category: "Mad og drikke",
        },
        {
          title: "Netto",
          price: 750,
          category: "Indkøb",
        },
      ],
    },
  ];

  const [month, setMonth] = useState("2022-10");

  return (
    <View style={[screenWrapper.style, style.container]}>
      <AddExpense />
      <Ionicons style={style.addCircle} size={38} name={"add-circle"} />
      <MonthSelector
        months={["2022-8", "2022-9", "2022-10"]}
        setMonth={setMonth}
      />
      <SpentThisMonth
        amount={3750.5}
        header="Brugt denne måned"
        underline={false}
        marginTop={50}
      />
      <DaysFlatList dataForMonth={november.reverse()} monthName="november" />
      <StatusBar style="auto" />
    </View>
  );
};

export default Spendings;
