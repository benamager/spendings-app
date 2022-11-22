/* saveStorage.tsx function */
import AsyncStorage from "@react-native-async-storage/async-storage";

// save data to async-storage
const saveStorage = async (key: string, data: any) => {
  try {
    // stringify Storage and save
    const json = JSON.stringify(data);
    await AsyncStorage.setItem(key, json);
    return true;
  } catch (err) {
    // return error
    return false;
  }
};

export default saveStorage;
