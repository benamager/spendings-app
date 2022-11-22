/* useSaveStorage.tsx hook */
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

// get data from async-storage
const useSaveStorage = (key: any, data: any) => {
  useEffect(() => {
    if (key !== null && data !== null) {
      (async () => {
        try {
          // save data to async-storage
          const json = JSON.stringify(data);
          const result = await AsyncStorage.setItem(key, json);
        } catch (err) {
          // if err set error
          console.error(err);
        }
      })();
    }
  }, [key, data]);
};

export default useSaveStorage;
