/* addexpense.tsx screen */
import { View, Text, Button } from "react-native";
import style from "./style";
import screenWrapper from "../../styles/screenWrapper";
import SpentThisMonth from "../../components/SpentThisMonth";

const AddExpense = ({ navigation }) => {
  return (
    <View style={[style.container, screenWrapper.style]}>
      <Text
        style={style.abort}
        onPress={() => navigation.navigate("Spendings")}
      >
        Annuler
      </Text>
      <SpentThisMonth
        amount={0}
        header={null}
        underline={true}
        marginTop={120}
      />
    </View>
  );
};

export default AddExpense;
