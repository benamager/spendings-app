/* MonthSelector.tsx component */
import { View, Text, Button } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import getMonthName from "../../functions/getMonthName";
import style from "./style";

const MonthSelector = ({ months, setMonth }) => {
  // state serving showing the month name and year
  const [currentMonth, setCurrentMonth] = useState(months.length - 1);

  // function to change the current month
  const nextMonth = () => {
    if (currentMonth < months.length - 1) {
      setCurrentMonth(currentMonth + 1);
      setMonth(months[currentMonth + 1]);
    }
  };

  const prevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth(currentMonth - 1);
      setMonth(months[currentMonth - 1]);
    }
  };

  // get the month name and year
  const [year, month] = months[currentMonth].split("-");

  return (
    <View style={style.container}>
      <Ionicons style={style.icons} name={"chevron-back"} onPress={prevMonth} />
      <Text style={style.monthText}>
        {year} {getMonthName(month)}
      </Text>
      <Ionicons
        style={style.icons}
        name={"chevron-forward"}
        onPress={nextMonth}
      />
    </View>
  );
};

export default MonthSelector;
