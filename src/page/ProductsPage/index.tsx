import Caroussel from "../../components/Caroussel";
import Header from "../../components/Header";
import ProductsDescription from "../../components/Products/ProductsDescription";
import ProductsPictures from "../../components/Products/ProductsPictures";
import useScreenSize from "../../hook/useScreenSize";
import product_1 from "../../../public/assets/img/image-product-1.jpg";
import product_2 from "../../../public/assets/img/image-product-2.jpg";
import product_3 from "../../../public/assets/img/image-product-3.jpg";

const Page = () => {
  const isMobile = useScreenSize();

  const productImg = [product_1, product_2, product_3];
  return (
    <div className="flex h-screen flex-col ">
      <header className="lg:mx-32 lg:mt-8">
        <Header />
        <hr className="mt-6 lg:mt-10" />
      </header>
      <main className="flex flex-1 flex-col items-center justify-around lg:mx-40 lg:my-28 lg:flex-row">
        {isMobile ? (
          <div className="mb-3">
            <Caroussel
              cssBtn="mobile_carousel_btn"
              img={productImg}
              cssImg="w-[375px]"
              width="6px"
              height="12px"
            />
          </div>
        ) : (
          <ProductsPictures />
        )}
        <ProductsDescription />
      </main>
      <footer className="my-2 flex h-14 justify-center">
        <p className="flex items-center text-sm">
          Application coded by
          <a
            href="https://github.com/JodieAddis"
            target="blank_"
            className="ml-1 hover:font-bold hover:text-Pumpkin"
          >
            Jodie Addis
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Page;
