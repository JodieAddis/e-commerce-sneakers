import IconAdd from "../../../icons/IconAdd";
import IconCart from "../../../icons/IconCart";
import IconMinus from "../../../icons/IconMinus";

const Component = () => {
  return (
    <>
      <div className="mb-3 flex h-14 w-[327px] flex-row justify-between rounded-lg bg-LinkWater lg:mb-0 lg:w-[150px]">
        <div className="ml-4 flex cursor-pointer items-center">
          <IconMinus />
        </div>
        <p className="flex items-center text-base font-bold text-Shark">5</p>
        <div className="mr-4 flex cursor-pointer items-center">
          <IconAdd />
        </div>
      </div>
      <button className="flex h-14 w-[327px] flex-row items-center justify-center rounded-lg bg-Pumpkin text-base font-bold text-white hover:bg-AtomicTangerine lg:w-[272px]">
        <IconCart color="#ffffff" />
        <p className="ml-4">Add to cart</p>
      </button>
    </>
  );
};

export default Component;
