import type { Meta, StoryObj } from "@storybook/react";

import IconDelete from ".";

const meta = {
  title: "icons/IconDelete",
  component: IconDelete,
  tags: ["autodocs"],
} satisfies Meta<typeof IconDelete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DeleteIcon: Story = {
  name: "Delete icon for an element",
};
