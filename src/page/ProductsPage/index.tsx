import Header from "../../components/Header";
import ProductsDescription from "../../components/Products/ProductsDescription";

const Page = () => {
  return (
    <div className="h-screen">
      <header className="bg-gray-600">
        <Header />
      </header>
      <main className="bg-yellow-300 flex justify-center flex-1">
        <ProductsDescription />
      </main>
      <footer className="flex justify-center">
        <p>Application coded by Jodie Addis</p>
      </footer>
    </div>
  );
};

export default Page;
