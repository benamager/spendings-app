/* useGetStorage.tsx hook */
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

// get data from async-storage
const useGetStorage = (key: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        // get data from async-storage
        const object = await AsyncStorage.getItem(key);
        const json = JSON.parse(object);
        setData(json);
        setLoading(false);
      } catch (err) {
        // if err set error
        setError(err);
        setLoading(false);
      }
    })();
  }, [key]);

  return { data, error, loading };
};

export default useGetStorage;
