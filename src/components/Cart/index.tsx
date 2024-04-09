import IconDelete from "../../icons/IconDelete";
import Paragraph from "../../typographies/Paragraph";
import product from "../../../public/assets/img/image-product-1.jpg";
import Button from "../Button";

interface CartProps {
  Number: string;
  Sum: string;
}

const Component = ({ Number, Sum }: CartProps) => {
  return (
    <div className=" justify center flex w-[360px] flex-col rounded-xl bg-white shadow-lg">
      <div className="mt-6 px-6">
        <Paragraph
          content="Cart"
          css="text-base text-Shark font-bold text-left"
        />
      </div>
      <hr className="mt-6 bg-PaleSky" />
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
                content={`$125.00 x ${Number}`}
                css="text-base text-PaleSky mr-2"
              />
              <Paragraph
                content={`$${Sum}`}
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
            css="text-white text-base font-bold bg-Pumpkin w-full py-4 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Component;
