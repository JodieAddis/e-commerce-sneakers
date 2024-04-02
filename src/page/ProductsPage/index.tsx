import Header from "../../components/Header";
import ProductsDescription from "../../components/Products/ProductsDescription";

const Page = () => {
  return (
    <div className="h-screen">
      <header className="mx-32 mt-8 flex-auto">
        <Header />
        <hr className="mt-10" />
      </header>
      <main className="my-auto flex flex-1 flex-row items-center justify-center">
        <p>Products Pictures</p>
        <ProductsDescription />
      </main>
      <footer className="my-4 flex flex-auto justify-center">
        <p className="text-sm">
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
