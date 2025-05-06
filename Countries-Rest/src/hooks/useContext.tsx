import { useContext } from "react";
import { context } from "../context/context";

// Custom hook to use the context
export const useCustomContext = () => {
  const data = useContext(context);

  return data;
};
