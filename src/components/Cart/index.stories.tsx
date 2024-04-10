import type { Meta, StoryObj } from "@storybook/react";

import Cart from ".";

const meta = {
  title: "components/Cart",
  component: Cart,
  tags: ["autodocs"],
} satisfies Meta<typeof Cart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResumeCart: Story = {
  name: "Shopping cart indicating items added by the user",
};
