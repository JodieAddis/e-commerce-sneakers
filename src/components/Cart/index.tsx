import Button from "../Button";
import IconDelete from "../../icons/IconDelete";
import Paragraph from "../../typographies/Paragraph";
import product from "../../../public/assets/img/image-product-1.jpg";
import { useContext } from "react";
import { CountContext } from "../../context/CountProductsContext";

const Component = () => {
  const { count } = useContext(CountContext);
  const totalPrice = 125 * count;

  return (
    <div className=" justify center flex w-[360px] flex-col rounded-xl bg-white shadow-lg">
      <div className="mt-6 px-6">
        <Paragraph
          content="Cart"
          css="text-base text-Shark font-bold text-left"
        />
      </div>
      <hr className="mt-6 bg-PaleSky" />
      {count == 0 ? (
        <div className="flex justify-center">
          <Paragraph
            content="Your cart is empty."
            css="text-PaleSky font-bold text-base my-20"
          />
        </div>
      ) : (
        <div className="mt-6 px-6">
          <div className="flex flex-row">
            <img
              src={product}
              alt="product image"
              className="mr-4 h-12 w-12 rounded-md"
            />
            <div className="mr-5">
              <Paragraph
                content="Fall Limited Edition Sneakers"
                css="text-base text-PaleSky"
              />
              <div className="flex flex-row">
                <Paragraph
                  content={`$125.00 x ${count}`}
                  css="text-base text-PaleSky mr-2"
                />
                <Paragraph
                  content={`$${totalPrice}.00`}
                  css="text-base text-Shark font-bold"
                />
              </div>
            </div>
            <div className="flex cursor-pointer items-center">
              <IconDelete />
            </div>
          </div>
          <div className="my-8">
            <Button
              content="Checkout"
              css="text-white text-base font-bold bg-Pumpkin w-full py-4 rounded-lg hover:bg-AtomicTangerine"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Component;
