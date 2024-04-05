import type { Meta, StoryObj } from "@storybook/react";

import IconMinus from ".";

const meta = {
  title: "icons/IconMinus",
  component: IconMinus,
  tags: ["autodocs"],
} satisfies Meta<typeof IconMinus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MinusIcon: Story = {
  name: "Decrement icon for an element",
};
