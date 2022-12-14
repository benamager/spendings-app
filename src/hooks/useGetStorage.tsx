/* useGetStorage.tsx hook */
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

// get data from async-storage
const useGetStorage = (key: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      AsyncStorage.getItem(key).then((res) => {
        setData(JSON.parse(res));
        setLoading(false);
      });
    } catch (err) {
      // if err set error
      setError(err);
      setLoading(false);
    }
  }, [key]);

  return { data, error, loading };
};

export default useGetStorage;
