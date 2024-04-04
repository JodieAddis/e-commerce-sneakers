import ProductsAdd from "../../components/Products/ProductsAdd";
import ProductsDescription from "../../components/Products/ProductsDescription";

const Container = () => {
  return (
    <section className="flex w-[327px] flex-col items-center justify-center lg:w-[445px]">
      <ProductsDescription />
      <div className="mt-8 flex flex-col justify-center lg:mt-14 lg:flex-row lg:justify-between">
        <ProductsAdd />
      </div>
    </section>
  );
};

export default Container;
