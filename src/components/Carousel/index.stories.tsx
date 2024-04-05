import type { Meta, StoryObj } from "@storybook/react";

import Carousel from ".";

const meta = {
  title: "components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: {
    img: { description: "Path to the images" },
    cssBtn: { description: "CSS style for buttons" },
    cssImg: { description: "CSS style for images" },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WordDefinition: Story = {
  name: "Display the word of the word chosen by the user, and the phonetic of this word",
  args: {
    img: [
      "../../../../public/assets/img/image-product-1.jpg",
      "../../../../public/assets/img/image-product-2.jpg",
      "../../../../public/assets/img/image-product-3.jpg",
      "../../../../public/assets/img/image-product-4.jpg",
    ],
    cssBtn:
      "absolute mx-3 flex h-10 w-10 items-center justify-center rounded-full bg-white",
    cssImg: "h-[445px] w-[445px] cursor-pointer rounded-lg flex items-center",
  },
};
