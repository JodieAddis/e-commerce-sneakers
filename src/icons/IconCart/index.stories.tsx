import type { Meta, StoryObj } from "@storybook/react";

import IconCart from ".";

const meta = {
  title: "icons/IconCart",
  component: IconCart,
  tags: ["autodocs"],
  argTypes: {
    color: { description: "Color value for the icon" },
  },
} satisfies Meta<typeof IconCart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CartIcon: Story = {
  name: "Icon representing the shopping cart on the e-commerce application",
  args: {
    color: "#69707D",
  },
};
