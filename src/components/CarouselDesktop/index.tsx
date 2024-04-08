import IconClose from "../../icons/IconClose";
import Carousel from "../Carousel";

import product_1 from "../../../public/assets/img/image-product-1.jpg";
import product_2 from "../../../public/assets/img/image-product-2.jpg";
import product_3 from "../../../public/assets/img/image-product-3.jpg";
import product_4 from "../../../public/assets/img/image-product-4.jpg";

const Component = () => {
  const productImg = [product_1, product_2, product_3, product_4];
  return (
    <div className="absolute  left-1/3">
      <div className=" mb-8 flex justify-end">
        <button>
          <IconClose color="#ffffff" />
        </button>
      </div>
      <div className="mb-8">
        <Carousel
          img={productImg}
          cssBtn="desktop_carousel_btn"
          cssImg="rounded-2xl w-[550px] h-[550px]"
        />
      </div>
      <div className="flex flex-row justify-evenly ">
        {productImg.map((item, index) => (
          <div className="border-2 border-solid border-black border-opacity-0 hover:rounded-lg hover:border-2 hover:border-solid hover:border-Pumpkin">
            <img
              key={index}
              src={item}
              alt=""
              className="h-20 w-20 cursor-pointer rounded-lg "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component;
