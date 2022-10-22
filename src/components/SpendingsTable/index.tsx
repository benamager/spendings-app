/* spendingstable.tsx component */
import { Text, View } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from "react-native-table-component";
import style from "./style";

// for table
const tableHead = [
  "",
  <Text style={[style.title, { alignSelf: "flex-start" }]}>Kategori</Text>,
  <Text style={{ alignSelf: "center" }}>Procent</Text>,
  <Text style={{ alignSelf: "flex-end" }}>Brugt</Text>,
];
const tableTitle = [
  <Text style={style.icon}>🍔</Text>,
  <Text style={style.icon}>💪🏼</Text>,
  <Text style={style.icon}>🍔</Text>,
  <Text style={style.icon}>🍔</Text>,
];
const tableData = [
  [
    <Text>Kantine mad</Text>,
    <Text style={{ alignSelf: "center" }}>2</Text>,
    <Text style={{ alignSelf: "flex-end" }}>360 DKK</Text>,
  ],
  [
    <Text>Dumme penge</Text>,
    <Text style={{ alignSelf: "center" }}>2</Text>,
    <Text style={{ alignSelf: "flex-end" }}>360 DKK</Text>,
  ],
  [
    <Text>Smarte ting</Text>,
    <Text style={{ alignSelf: "center" }}>2</Text>,
    <Text style={{ alignSelf: "flex-end" }}>360 DKK</Text>,
  ],
  [
    <Text>Træning</Text>,
    <Text style={{ alignSelf: "center" }}>2</Text>,
    <Text style={{ alignSelf: "flex-end" }}>360 DKK</Text>,
  ],
];

const SpendingsTable = () => {
  return (
    <View style={style.container}>
      <Table borderStyle={{ borderWidth: 0 }}>
        <Row data={tableHead} flexArr={[1, 3, 3, 2]} style={style.head} />
        <TableWrapper style={style.wrapper}>
          <Col data={tableTitle} style={style.title} heightArr={[40, 40]} />
          <Rows data={tableData} flexArr={[3, 3, 2]} style={style.row} />
        </TableWrapper>
      </Table>
    </View>
  );
};

export default SpendingsTable;
