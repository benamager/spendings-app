/* DaysFlatList.tsx template */
import { View, Text, FlatList } from "react-native";
import style from "./style";

const DaysFlatList = ({ dataForMonth }) => {
  const dayContainer = ({ item }) => {
    const eventsForDay = item.events;

    return (
      <View style={style.container}>
        <View style={style.header}>
          <Text>I dag</Text>
          <Text>150 DKK</Text>
        </View>
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
