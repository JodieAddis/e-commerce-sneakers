import IconNextPrevious from "../../icons/IconNextPrevious";
import { useState } from "react";
import Button from "../Button";

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
      <Button
        content={
          <>
            <IconNextPrevious kind="previous" />
          </>
        }
        css={`
          ${cssBtn} left-0
        `}
        onclick={prevSlide}
      />
      <img src={img[index]} alt={`Slide ${index}`} className={`${cssImg}`} />
      <Button
        content={
          <>
            <IconNextPrevious kind="next" />
          </>
        }
        css={`
          ${cssBtn} right-0
        `}
        onclick={nextSlide}
      />
    </div>
  );
};

export default Component;
