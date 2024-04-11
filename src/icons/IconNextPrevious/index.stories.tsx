import type { Meta, StoryObj } from "@storybook/react";

import IconNextPreivous from ".";

const meta = {
  title: "icons/IconNextPreivous",
  component: IconNextPreivous,
  tags: ["autodocs"],
  argTypes: {
    kind: {
      description:
        "Specify which icon should be displayed. If kind = 'next', it's the next icon that appears, otherwise it's the previous icon.",
    },
  },
} satisfies Meta<typeof IconNextPreivous>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NextAndPreviousIcon: Story = {
  name: "Arrow used to display the next or the previous items, such as in a carousel for example",
  args: {
    kind: "next",
  },
};
