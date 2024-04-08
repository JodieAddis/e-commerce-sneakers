import product_1 from "../../../../public/assets/img/image-product-1.jpg";
import product_2 from "../../../../public/assets/img/image-product-2.jpg";
import product_3 from "../../../../public/assets/img/image-product-3.jpg";
import product_4 from "../../../../public/assets/img/image-product-1.jpg";
import { useState } from "react";

interface ProductsPicturesProps {
  imageClicked: () => void;
}

const Component = ({ imageClicked }: ProductsPicturesProps) => {
  const productImg = [product_1, product_2, product_3, product_4];

  const [currentImage, setCurrentImage] = useState(product_1);

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
            alt=""
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
