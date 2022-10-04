/* saveObject.tsx function */
import AsyncStorage from "@react-native-async-storage/async-storage";

// save data to async-storage
const saveObject = async (key: string, object: object) => {
  try {
    // stringify object and save
    const jsonValue = JSON.stringify(object);
    await AsyncStorage.setItem(key, jsonValue);
    return { error: false };
  } catch (err) {
    // return error
    return { error: err };
  }
};

export default saveObject;
