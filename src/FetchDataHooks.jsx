import { useState, useEffect } from "react";

export const GetDataHooks = (url) => {
  const [guests, setGuests] = useState([]); //I need brackets there or it breaks. Why?
  const getData = async (url) => {
    try {
      const result = await fetch(url);
      const data = await result.json();
      setGuests(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData(url);
  }, [url]);
  return guests;
};
