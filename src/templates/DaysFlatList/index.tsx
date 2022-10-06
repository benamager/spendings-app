/* DaysFlatList.tsx template */
import { View, Text, FlatList } from "react-native";
import style from "./style";
import SpentListItem from "../../components/SpentListItem";

const DaysFlatList = ({ dataForMonth, monthName }) => {
  // component for printing the day and the total amount spent that day
  // printing the list of items for that day
  const dayContainer = ({ item }) => {
    const eventsForDay = item.events;

    // Calculate the total amount spent for the day
    let totalAmount = 0;
    eventsForDay.forEach((event) => {
      totalAmount += event.price;
    });

    return (
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.headerIconsMargin}>
            {item.day} {monthName}
          </Text>
          <Text style={style.headerIconsMargin}>{totalAmount} DKK</Text>
        </View>
        {eventsForDay.map((event: any, i: number) => {
          return <SpentListItem key={i} {...event} />;
        })}
      </View>
    );
  };

  return (
    <FlatList
      data={dataForMonth}
      renderItem={dayContainer}
      keyExtractor={(item) => item.id}
    />
  );
};

export default DaysFlatList;
