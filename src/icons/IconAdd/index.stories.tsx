import type { Meta, StoryObj } from "@storybook/react";

import IconAdd from ".";

const meta = {
  title: "icons/ IconAdd",
  component: IconAdd,
} satisfies Meta<typeof IconAdd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductAddIcon: Story = {
  name: "Icon allowing incrementation of an element when used as a button",
};
