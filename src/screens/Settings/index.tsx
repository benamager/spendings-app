/* settings.tsx screen */
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import screenWrapper from "../../styles/screenWrapper";
import SettingsRow from "../../components/SettingsRow";

// Settings page
const Settings = () => {
  return (
    <View style={[screenWrapper.style, { paddingTop: 0 }]}>
      <Text
        style={{
          fontSize: 25,
          textAlign: "center",
          marginTop: 70,
          marginBottom: 30,
        }}
      >
        Indstillinger
      </Text>
      <SettingsRow
        title="Brug tjente penge funktion"
        desc="Tilføjer (tjente penge) kategori og trækker fra total sum."
        name="earnedMoney"
      />
      <SettingsRow
        title="Brug lys/mørk tema"
        desc="Tema lige nu => light"
        name="lightDark"
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default Settings;
