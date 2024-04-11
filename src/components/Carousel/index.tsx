import IconNext from "../../icons/IconNext";
import IconPrevious from "../../icons/IconPrevious";
import { useState } from "react";

interface CarouselProps {
  img: string[];
  cssBtn: string;
  cssImg?: string;
}

const Component = ({ img, cssBtn, cssImg }: CarouselProps) => {
  const [index, setIndex] = useState<number>(0);

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? img.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex === img.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-row items-center">
      <button className={`${cssBtn} left-0`} onClick={prevSlide}>
        <IconPrevious />
      </button>
      <img src={img[index]} alt={`Slide ${index}`} className={`${cssImg}`} />
      <button className={`${cssBtn} right-0`} onClick={nextSlide}>
        <IconNext />
      </button>
    </div>
  );
};

export default Component;
