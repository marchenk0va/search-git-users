import * as React from "react";
import axios from "axios";
import { IAPI } from "./index.modules";

export const API: IAPI = {
  users: (username: string) =>
    `https://api.github.com/search/users?q=${username}+in%3Alogin&type=Users`
};

export const fetchData = async (url: string) => await axios.get(url);

export const useDebounce = (value: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const callback = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(callback);
  }, [value, delay]);

  return debouncedValue;
};
