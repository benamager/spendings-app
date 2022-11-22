/* getStorage.tsx function */
import AsyncStorage from "@react-native-async-storage/async-storage";

// get Storage from async-storage
const useGetStorage = async (key: string) => {
  try {
    // return object from async-storage
    const response = await AsyncStorage.getItem(key);
    const json = await JSON.parse(response);
    return { json: json, error: false };
  } catch (err) {
    // return error
    return { json: null, error: err };
  }
};

export default getStorage;
