import type { Meta, StoryObj } from "@storybook/react";

import IconLogo from ".";

const meta = {
  title: "icons/IconLogo",
  component: IconLogo,
  tags: ["autodocs"],
} satisfies Meta<typeof IconLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoIcon: Story = {
  name: "Application logo",
};
