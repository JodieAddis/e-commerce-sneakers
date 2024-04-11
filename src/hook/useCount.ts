import { useContext } from "react";
import { CountContext } from "../context/CountProductsContext";

const useCount = () => {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error("Context error");
  }
  return context;
};

export default useCount;
