import Carousel from "../Carousel";
import IconClose from "../../icons/IconClose";
import { productImg } from "../../data";
import Button from "../Button";

interface CarouselDesktopProps {
  isClosed: () => void;
}

const Component = ({ isClosed }: CarouselDesktopProps) => {
  return (
    <div className="absolute left-1/3 top-10">
      <div className=" mb-8 flex justify-end">
        <Button
          content={
            <>
              <IconClose color="#ffffff" />
            </>
          }
          onclick={isClosed}
        />
      </div>
      <div className="mb-8">
        <Carousel
          img={productImg}
          cssBtn="desktop_carousel_btn"
          cssImg="rounded-2xl w-[445px] h-[445px]"
        />
      </div>
      <div className="carousel_container flex flex-row justify-evenly ">
        {productImg.map((item, index) => (
          <div className="border-2 border-solid border-black border-opacity-0 hover:rounded-lg hover:border-2 hover:border-solid hover:border-Pumpkin">
            <img
              key={index}
              src={item}
              alt={`picture of ${item}`}
              className=" absolute h-20 w-20 cursor-pointer rounded-lg hover:border-2 hover:border-solid hover:border-Pumpkin hover:opacity-50"
            />
            <div className="bottom-[2px] h-20 w-20 rounded-lg bg-white"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component;
