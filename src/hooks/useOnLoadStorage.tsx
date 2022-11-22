/* useOnLoadStorage.tsx custom hook */

import useGetStorage from "./useGetStorage";
import useSaveStorage from "./useSaveStorage";
import { useEffect, useState } from "react";
import deleteStorage from "../functions/deleteStorage";
import useTime from "./useTime";

const useOnLoadStorage = () => {
  //deleteStorage("months");

  const { data: months } = useGetStorage("months");
  const [storage, setStorage] = useState({ key: null, json: null });
  const yearMonth = useTime("yearMonth");
  useSaveStorage(storage.key, storage.json);
  useEffect(() => {
    // if first install
    if (months === null) {
      setStorage({ key: "months", json: [`${yearMonth}`] });
      console.log("init data");
    }
    // if new month
    if (months !== null) {
      if (months[0] !== yearMonth) {
        setStorage({ key: "months", json: [...months, yearMonth] });
      }
    }
  }, []);
};

export default useOnLoadStorage;
