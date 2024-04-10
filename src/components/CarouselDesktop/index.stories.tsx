import type { Meta, StoryObj } from "@storybook/react";

import CarouselDesktop from ".";

const meta = {
  title: "components/CarouselDesktop",
  component: CarouselDesktop,
  tags: ["autodocs"],
  argTypes: {
    isClosed: { description: "Function to close the carousel" },
  },
} satisfies Meta<typeof CarouselDesktop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CarouselForDesktop: Story = {
  name: "Carousel for the desktop version",
  args: {
    isClosed: () => {},
  },
};
