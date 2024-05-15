import type { Meta, StoryObj } from "@storybook/react";

import IconClose from ".";

const meta = {
  title: "icons/IconClose",
  component: IconClose,
  tags: ["autodocs"],
} satisfies Meta<typeof IconClose>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CloseIcon: Story = {
  name: "Close icon for a dropdown menu or other purposes",
  args: {
    color: "#000",
  },
};
