import { ReactNode, createContext, useState } from "react";

interface CountProviderProps {
  children: ReactNode;
}

interface CountContextType {
  count: number;
  updateCount: (count: number) => void;
}

export const CountContext = createContext<CountContextType>({
  count: 0,
  updateCount: () => {},
});

export const CountProductsProvider: React.FC<CountProviderProps> = ({
  children,
}) => {
  const [count, setCount] = useState<number>(0);

  const updateCount = (count: number): void => {
    setCount(count);
  };
  return (
    <CountContext.Provider value={{ count, updateCount }}>
      {children}
    </CountContext.Provider>
  );
};
