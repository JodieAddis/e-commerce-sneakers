import { productImg } from "../../../data";
import { useState } from "react";

interface ProductsPicturesProps {
  imageClicked: () => void;
}

const Component = ({ imageClicked }: ProductsPicturesProps) => {
  const [currentImage, setCurrentImage] = useState<string>(productImg[0]);

  return (
    <div className="flex flex-col">
      <img
        src={currentImage}
        alt=""
        className="h-[445px] w-[445px] rounded-lg"
        onClick={imageClicked}
      />
      <div className="mt-8 flex flex-row justify-between">
        {productImg.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`Picture of ${item}`}
            className="product_list"
            onClick={() => {
              setCurrentImage(item);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Component;
