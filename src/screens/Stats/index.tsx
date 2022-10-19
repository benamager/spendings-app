/* stats.tsx screen */
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import screenWrapper from "../../styles/screenWrapper";
import PieChart from "../../components/PieChart";
import MonthSelector from "../../components/MonthSelector";
import { useState } from "react";
import TagList from "../../components/TagList";
import SpentThisMonth from "../../components/SpentThisMonth";
import StatsUpDown from "../../components/StatsUpDown";
import style from "./style";

// for table
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from "react-native-table-component";

// Stats page
const Stats = () => {
  const [month, setMonth] = useState("2022-10");
  const [activeTag, setActiveTag] = useState("Uge");

  // for table
  const tableHead = ["", "Kategori", "Procent", "Brugt"];
  const tableTitle = ["🍔", "💩", "😉", "💪🏼"];
  const tableData = [
    ["Kantine mad", "2", "360"],
    ["Dumme penge", "b", "5000"],
    ["Smarte ting", "2", "100"],
    ["Træning", "b", "31"],
  ];

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
      <StatsUpDown activeTag={activeTag} up={false} />
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
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 0 }}>
          <Row
            data={tableHead}
            flexArr={[1, 3, 2, 2]}
            style={styles.head}
            textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper}>
            <Col
              data={tableTitle}
              style={styles.title}
              heightArr={[28, 28]}
              textStyle={styles.text}
            />
            <Rows
              data={tableData}
              flexArr={[2, 1, 1]}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40, backgroundColor: "#fff" },
  head: { height: 30, backgroundColor: "#f1f8ff" },
  wrapper: { flexDirection: "row" },
  title: { flex: 1, backgroundColor: "#f6f8fa" },
  row: { height: 28 },
  text: { textAlign: "center" },
});

export default Stats;
