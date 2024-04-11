import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";

const Component = () => {
  return (
    <section>
      <div className="flex flex-col">
        <Heading
          kind="h1"
          content="sneaker company"
          css="uppercase text-Pumpkin font-bold lg:text-sm text-xs"
        />
        <Heading
          kind="h2"
          content="Fall Limited Edition Sneakers"
          css="text-Shark text-3xl lg:text-5xl font-bold mt-6"
        />
        <Paragraph
          content="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
          css="text-base text-PaleSky mt-8"
        />
        <div className="lg:flex-colnp flex flex-row justify-between">
          <div className="mt-8 flex flex-row">
            <Paragraph content="$125.00" css="text-Shark text-3xl font-bold" />
            <div className="ml-4 flex items-center lg:ml-6">
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
      </div>
    </section>
  );
};

export default Component;
