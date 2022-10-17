/* stats.tsx screen */
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import screenWrapper from "../../styles/screenWrapper";
import PieChart from "../../components/PieChart";
import MonthSelector from "../../components/MonthSelector";
import { useState } from "react";

// Stats page
const Stats = () => {
  const [month, setMonth] = useState("2022-10");

  return (
    <View style={screenWrapper.style}>
      <MonthSelector
        months={["2022-8", "2022-9", "2022-10"]}
        setMonth={setMonth}
      />
      <PieChart
        bgColor="#ffffff"
        dataArray={[
          { value: 250, color: "red" },
          { value: 450, color: "blue" },
          { value: 100, color: "yellow" },
        ]}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default Stats;
