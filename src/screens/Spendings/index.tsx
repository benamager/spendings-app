/* spendings.tsx screen */
import { View, Text, Button, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import style from "./style";
import screenWrapper from "../../styles/screenWrapper";
import MonthSelector from "../../components/MonthSelector";
import SpentThisMonth from "../../components/SpentThisMonth";

import saveObject from "../../functions/saveObject";
import getObject from "../../functions/getObject";

// Spendings page
const Spendings = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
  ];

  const [month, setMonth] = useState("2022-10");

  // const renderItem = ({ item }) => (
  //   <Text style={style.renderitem}>{item.title}</Text>
  // );

  return (
    <View style={[screenWrapper.style, style.container]}>
      <Ionicons style={style.addCircle} size={38} name={"add-circle"} />
      <MonthSelector
        months={["2022-8", "2022-9", "2022-10"]}
        setMonth={setMonth}
      />
      <SpentThisMonth />
      {/* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> */}
      <StatusBar style="auto" />
    </View>
  );
};

export default Spendings;
