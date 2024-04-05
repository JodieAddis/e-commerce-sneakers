import type { Meta, StoryObj } from "@storybook/react";

import ProductsPictures from ".";

const meta = {
  title: "components/Products/ProductsPictures",
  component: ProductsPictures,
  tags: ["autodocs"],
} satisfies Meta<typeof ProductsPictures>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PicturesOfProducts: Story = {
  name: "Component to display product images",
};
