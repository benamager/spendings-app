/* spendingstable.tsx component */
import { Text, View } from "react-native";
import style from "./style";
import Row from "./row";
import RowHeader from "./rowHeader";

const SpendingsTable = () => {
  const total = 1000;
  const placeholderData = [
    {
      categoryIcon: "🍔",
      category: "Kantine mad",
      percent: "50%",
      spent: "28 DKK",
    },
    {
      categoryIcon: "💸",
      category: "Kantine mad",
      percent: "50%",
      spent: "28 DKK",
    },
  ];

  return (
    <View style={style.container}>
      <RowHeader />
      {placeholderData.map((data, i) => {
        return <Row key={i} total={total} {...placeholderData[i]} />;
      })}
    </View>
  );
};

export default SpendingsTable;
