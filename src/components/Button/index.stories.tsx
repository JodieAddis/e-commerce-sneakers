import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta = {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    content: { description: "Content of the button" },
    css: { description: "Style css of the button" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonForApplication: Story = {
  name: "Display the word of the word chosen by the user, and the phonetic of this word",
  args: {
    content: "Checkout",
    css: "text-white text-base font-bold bg-Pumpkin w-[327px] py-4 rounded-lg hover:bg-AtomicTangerine",
  },
};
