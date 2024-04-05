import type { Meta, StoryObj } from "@storybook/react";

import IconMenu from ".";

const meta = {
  title: "icons/IconMenu",
  component: IconMenu,
  tags: ["autodocs"],
} satisfies Meta<typeof IconMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuIcon: Story = {
  name: "Hamburger icon for the dropdown menu",
};
