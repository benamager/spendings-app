/* deleteStorage.tsx function */
import AsyncStorage from "@react-native-async-storage/async-storage";

// delete Storage from async-storage
const deleteStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (err) {
    return false;
  }
};

export default deleteStorage;
