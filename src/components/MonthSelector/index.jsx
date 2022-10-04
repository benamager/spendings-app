/* MonthSelector.tsx component */
import { View, Text, Button } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import getMonthFromIndex from "../../functions/getMonthFromIndex";
import style from "./style";

const MonthSelector = ({ months, setMonth }) => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(months.length - 1);

  console.log(getMonthFromIndex(2));

  const nextMonth = () => {
    if (currentMonthIndex < months.length - 1) {
      setCurrentMonthIndex(currentMonthIndex + 1);
      setMonth(months[currentMonthIndex + 1]);
    }
  };

  const prevMonth = () => {
    if (currentMonthIndex > 0) {
      setCurrentMonthIndex(currentMonthIndex - 1);
      setMonth(months[currentMonthIndex - 1]);
    }
  };

  return (
    <View style={style.container}>
      <Ionicons style={style.icons} name={"chevron-back"} onPress={prevMonth} />
      <Text style={style.monthText}>{months[currentMonthIndex]}</Text>
      <Ionicons
        style={style.icons}
        name={"chevron-forward"}
        onPress={nextMonth}
      />
    </View>
  );
};

export default MonthSelector;
