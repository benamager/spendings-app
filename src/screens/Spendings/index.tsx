/* spendings.tsx screen */
import { View, Text, Button, TextInput, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import style from "./style";
import screenWrapper from "../../styles/screenWrapper";
import MonthSelector from "../../components/MonthSelector";
import { useNavigation } from "@react-navigation/native";
import SpentThisMonth from "../../components/SpentThisMonth";
import DaysFlatList from "../../templates/DaysFlatList";

// Spendings page
const Spendings = ({ navigation }) => {
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
  const inputRef: any = useRef();

  return (
    <View style={[screenWrapper.style, style.container]}>
      <Ionicons
        style={style.addCircle}
        size={38}
        name={"add-circle"}
        onPress={() => navigation.navigate("Add")}
      />
      <MonthSelector
        months={["2022-8", "2022-9", "2022-10"]}
        setMonth={setMonth}
      />
      <SpentThisMonth
        amount={3750.5}
        header="Brugt denne måned"
        underline={false}
        alignSelf="center"
        valuta="DKK"
        marginTop={50}
      />
      <Pressable
        style={style.inputContainer}
        onPress={() => {
          inputRef.current.focus();
        }}
      >
        <Ionicons style={style.inputIcon} name={"search"} />
        <TextInput
          style={style.input}
          value={null}
          ref={inputRef}
          placeholder="Søg i denne måned.."
        />
      </Pressable>
      <DaysFlatList dataForMonth={november.reverse()} monthName="november" />
      <StatusBar style="auto" />
    </View>
  );
};

export default Spendings;
