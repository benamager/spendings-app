/* DaysFlatList.tsx template */
import { View, Text, FlatList } from "react-native";
import style from "./style";
import SpentListItem from "../../components/SpentListItem";

const DaysFlatList = ({ dataForMonth }) => {
  // component for printing the day and the total amount spent that day
  // printing the list of items for that day
  const dayContainer = ({ item }) => {
    const eventsForDay = item.events;

    return (
      <View style={style.container}>
        <View style={style.header}>
          <Text>{item.day}</Text>
          <Text>150 DKK</Text>
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
