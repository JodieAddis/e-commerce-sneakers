import IconAddMinus from "../../icons/IconAddMinus";
import IconCart from "../../icons/IconCart";

import { useState } from "react";
import useCount from "../../hook/useCount";
import Button from "../../components/Button";
import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  const [counter, setCounter] = useState<number>(0);

  const { updateCount } = useCount();

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
  };

  return (
    <>
      <div className="mb-3 flex h-14 w-[327px] flex-row justify-between rounded-lg bg-LinkWater lg:mb-0 lg:w-[150px]">
        <Button
          content={
            <>
              <IconAddMinus kind="minus" />
            </>
          }
          css="ml-4 flex cursor-pointer items-center"
          onclick={decrementNumber}
        />
        <Paragraph
          content={counter}
          css="flex items-center text-base font-bold text-Shark"
        />
        <Button
          content={
            <>
              <IconAddMinus kind="add" />
            </>
          }
          css="mr-4 flex cursor-pointer items-center"
          onclick={incrementNumber}
        />
      </div>
      <Button
        content={
          <>
            {" "}
            <IconCart color="#ffffff" />
            <p className="ml-4">Add to cart</p>
          </>
        }
        css="flex h-14 w-[327px] flex-row items-center justify-center rounded-lg bg-Pumpkin text-base font-bold text-white hover:bg-AtomicTangerine lg:w-[272px]"
        onclick={handlClick}
      />
    </>
  );
};

export default Component;
