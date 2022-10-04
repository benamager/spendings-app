/* getObject.tsx function */
import AsyncStorage from "@react-native-async-storage/async-storage";

// get object from async-storage
const getObject = async (key: string) => {
  try {
    // return object from async-storage
    const object = await AsyncStorage.getItem(key);
    console.log(object);
    return { data: object, error: false };
  } catch (err) {
    // return error
    return { data: null, error: err };
  }
};

export default getObject;
