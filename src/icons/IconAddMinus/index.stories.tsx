import type { Meta, StoryObj } from "@storybook/react";

import IconAddMinus from ".";

const meta = {
  title: "icons/IconAddMinus",
  component: IconAddMinus,
  tags: ["autodocs"],
  argTypes: {
    kind: {
      description:
        "Specify which icon should be displayed. If kind = 'add', it's the add icon that appears, otherwise it's the minus icon.",
    },
  },
} satisfies Meta<typeof IconAddMinus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddAndMinusIcon: Story = {
  name: "Icon allowing incrementation of an element when used as a button",
  args: {
    kind: "add",
  },
};
