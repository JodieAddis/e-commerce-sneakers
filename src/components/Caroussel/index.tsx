import IconNext from "../../icons/IconNext";
import IconPrevious from "../../icons/IconPrevious";
import { useState } from "react";

// interface CarouselProps {
//   img: string[];
//   cssBtn: string;
//   cssImg: string;
// }
import { ExtendedCarouselProps } from "../../types";

const Component: React.FC<ExtendedCarouselProps> = ({
  img,
  cssBtn,
  cssImg,
  width,
  height,
}) => {
  const [index, setIndex] = useState(0);

  //img correspond à un array dans lequel sont regroupés les path vers les images
  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? img.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex === img.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-row items-center bg-Pumpkin">
      <button className={`${cssBtn} left-0`} onClick={prevSlide}>
        <IconPrevious width={width} height={height} />
      </button>
      <img src={img[index]} alt={`Slide ${index}`} className={`${cssImg}`} />
      <button className={`${cssBtn} right-0`} onClick={nextSlide}>
        <IconNext width={width} height={height} />
      </button>
    </div>
  );
};

export default Component;
