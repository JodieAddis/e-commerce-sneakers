import type { Meta, StoryObj } from "@storybook/react";

import IconNext from ".";

const meta = {
  title: "icons/IconNext",
  component: IconNext,
  tags: ["autodocs"],
} satisfies Meta<typeof IconNext>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NextIcon: Story = {
  name: "Next arrow used to display the next item, such as in a carousel for example",
};
