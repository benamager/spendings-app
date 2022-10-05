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
          price: 75,
          category: "Mad og drikke",
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
  ];

  const [month, setMonth] = useState("2022-10");

  return (
    <View style={[screenWrapper.style, style.container]}>
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
      <DaysFlatList dataForMonth={november} />
      <StatusBar style="auto" />
    </View>
  );
};

export default Spendings;
