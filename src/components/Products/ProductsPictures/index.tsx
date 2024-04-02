import product_1 from "../../../../public/assets/img/image-product-1.jpg";
import product_2 from "../../../../public/assets/img/image-product-2.jpg";
import product_3 from "../../../../public/assets/img/image-product-3.jpg";
import product_4 from "../../../../public/assets/img/image-product-1.jpg";

const Component = () => {
  return (
    <div className="flex flex-col">
      <img src={product_1} alt="" className="h-[445px] w-[445px] rounded-lg" />
      <div className="mt-8 flex flex-row justify-between">
        <img src={product_1} alt="" className="product_list" />
        <img src={product_2} alt="" className="product_list" />
        <img src={product_3} alt="" className="product_list" />
        <img src={product_4} alt="" className="product_list" />
      </div>
    </div>
  );
};

export default Component;
