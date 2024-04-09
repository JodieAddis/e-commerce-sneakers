import { CountContext } from "../../../context/CountProductsContext";
import IconAdd from "../../../icons/IconAdd";
import IconCart from "../../../icons/IconCart";
import IconMinus from "../../../icons/IconMinus";

import { useContext, useState } from "react";

const Component = () => {
  const [counter, setCounter] = useState<number>(0);

  const { count, updateCount } = useContext(CountContext);

  const incrementNumber = () => {
    setCounter(counter + 1);
  };

  const decrementNumber = () => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  const handlClick = () => {
    updateCount(counter);
    console.log(counter);
  };

  return (
    <>
      <div className="mb-3 flex h-14 w-[327px] flex-row justify-between rounded-lg bg-LinkWater lg:mb-0 lg:w-[150px]">
        <button
          className="ml-4 flex cursor-pointer items-center"
          onClick={decrementNumber}
        >
          <IconMinus />
        </button>
        <p className="flex items-center text-base font-bold text-Shark">
          {counter}
        </p>
        <button
          className="mr-4 flex cursor-pointer items-center"
          onClick={incrementNumber}
        >
          <IconAdd />
        </button>
      </div>
      <button
        className="flex h-14 w-[327px] flex-row items-center justify-center rounded-lg bg-Pumpkin text-base font-bold text-white hover:bg-AtomicTangerine lg:w-[272px]"
        onClick={handlClick}
      >
        <IconCart color="#ffffff" />
        <p className="ml-4">Add to cart</p>
      </button>
    </>
  );
};

export default Component;
