/* useTime.tsx hook */
import { useEffect, useState } from "react";

// get data from async-storage
const useTime = (get: string) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  if (get === "yearMonth") {
    return `${year}-${month}`;
  }
  if (get === "day") {
    return day;
  }
  if (get === "fullTime") {
    return `${year}-${month}-${day}-${hour}:${minutes}`;
  }
};

export default useTime;
