import Header from "../../components/Header";
import ProductsDescription from "../../components/Products/ProductsDescription";
import ProductsPictures from "../../components/Products/ProductsPictures";

const Page = () => {
  return (
    <div className="flex h-screen flex-col ">
      <header className="mx-32 mt-8">
        <Header />
        <hr className="mt-10" />
      </header>
      <main className="my-28 flex flex-1 flex-row items-center justify-center">
        <ProductsPictures />
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
