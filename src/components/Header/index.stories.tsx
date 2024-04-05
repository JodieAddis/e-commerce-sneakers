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
  name: "Display the word of the word chosen by the user, and the phonetic of this word",
};
