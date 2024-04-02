import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";
import ProductsAdd from "../ProductsAdd";

const Component = () => {
  return (
    <section className="flex w-[445px] flex-col items-center justify-center">
      <div className="flex flex-col">
        <Heading
          kind="h1"
          content="sneaker company"
          css="uppercase text-Pumpkin font-bold text-sm"
        />
        <Heading
          kind="h2"
          content="Fall Limited Edition Sneakers"
          css="text-Shark text-5xl font-bold mt-6"
        />
        <Paragraph
          content="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
          css="text-base text-PaleSky mt-8"
        />
        <div className="mt-8 flex flex-row">
          <Paragraph content="$125.00" css="text-Shark text-3xl font-bold" />
          <div className="ml-6 flex items-center">
            <Paragraph
              content="50%"
              css="bg-Serenade text-Pumpkin font-bold w-12 text-center rounded-sm"
            />
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <Paragraph
            content="$250.00"
            css="text-CadetBlue text-base line-through font-bold"
          />
        </div>
      </div>
      <div className="mt-14 flex flex-row">
        <ProductsAdd />
      </div>
    </section>
  );
};

export default Component;
