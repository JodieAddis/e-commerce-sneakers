import type { Meta, StoryObj } from "@storybook/react";

import IconPrevious from ".";

const meta = {
  title: "icons/IconPrevious",
  component: IconPrevious,
  tags: ["autodocs"],
} satisfies Meta<typeof IconPrevious>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PreviousIcon: Story = {
  name: "Previous arrow used to display the previous item, such as in a carousel for example",
};
