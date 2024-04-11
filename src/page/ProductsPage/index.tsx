import Carousel from "../../components/Carousel";
import CarouselDesktop from "../../components/CarouselDesktop";
import Header from "../../components/Header";
import { productImg } from "../../data";
import ProductsPictures from "../../components/Products/ProductsPictures";
import ProductsDescription from "../../components/Products/ProductsDescription";
import ProductsContainer from "../../container/ProductsContainer";

import useScreenSize from "../../hook/useScreenSize";
import { useState } from "react";

const Page = () => {
  const isMobile = useScreenSize();
  const [isCarouselVisible, setIsCarouselVisible] = useState<boolean>(false);

  return (
    <div className="flex h-screen flex-col ">
      <header className="lg:mx-32 lg:mt-8">
        <Header />
        <hr className="mt-6 lg:mt-10" />
      </header>
      <main className="flex flex-1 flex-col items-center justify-around lg:mx-40 lg:my-28 lg:flex-row">
        {isMobile ? (
          <div className="mb-3">
            <Carousel cssBtn="mobile_carousel_btn" img={productImg} />
          </div>
        ) : (
          <>
            <ProductsPictures
              imageClicked={() => {
                setIsCarouselVisible(true);
              }}
            />
            {isCarouselVisible && (
              <div className=" fixed left-0 top-0 z-10 h-screen w-screen bg-black bg-opacity-75">
                <CarouselDesktop
                  isClosed={() => {
                    setIsCarouselVisible(false);
                  }}
                />
              </div>
            )}
          </>
        )}
        <div className="flex w-[327px] flex-col items-center justify-center lg:w-[445px]">
          <ProductsDescription />
          <div className="mt-8 flex flex-col justify-center lg:mt-14 lg:flex-row lg:justify-between">
            <ProductsContainer />
          </div>
        </div>
      </main>
      <footer className="mb-5 mt-2 flex h-14 justify-center">
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
