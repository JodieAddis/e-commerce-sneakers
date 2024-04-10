import type { Meta, StoryObj } from "@storybook/react";

import Header from ".";

const meta = {
  title: "components/Header",
  component: Header,
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderComponent: Story = {
  name: "Header with navbar, logo of the application and the user profile",
};
