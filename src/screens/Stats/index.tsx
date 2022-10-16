/* stats.tsx screen */
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import screenWrapper from "../../styles/screenWrapper";
import PieChart from "../../components/PieChart";

// Stats page
const Stats = () => {
  return (
    <View style={screenWrapper.style}>
      <Text style={{ fontSize: 25, textAlign: "center", marginTop: 70 }}>
        Stats
      </Text>
      <PieChart />
      <StatusBar style="auto" />
    </View>
  );
};

export default Stats;
