/* stats.tsx screen */
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import screenWrapper from "../../styles/screenWrapper";
import PieChart from "../../components/PieChart";
import MonthSelector from "../../components/MonthSelector";
import { useState } from "react";
import TagList from "../../components/TagList";
import SpentThisMonth from "../../components/SpentThisMonth";
import style from "./style";

// Stats page
const Stats = () => {
  const [month, setMonth] = useState("2022-10");
  const [activeTag, setActiveTag] = useState("Uge");

  return (
    <View style={screenWrapper.style}>
      <MonthSelector
        months={["2022-8", "2022-9", "2022-10"]}
        setMonth={setMonth}
      />
      <SpentThisMonth
        amount={37.5}
        header={null}
        underline={false}
        alignSelf="flex-start"
        marginTop={48}
        valuta={"DKK"}
        valutaRight={true}
      />
      <View style={style.pieAndTagsContainer}>
        <PieChart
          bgColor="#ffffff"
          dataArray={[
            { value: 250, color: "#12130F" },
            { value: 450, color: "#F4AC45" },
            { value: 100, color: "#96E6B3" },
            { value: 271, color: "#DA3E52" },
          ]}
          widthHeight={170}
          centerWidthHeight="50%"
        />
        <TagList
          tags={["Uge", "Måned", "År"]}
          gap={10}
          activeTag={activeTag}
          setActiveTag={setActiveTag}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default Stats;
