import type { Preview } from "@storybook/react";
import "../public/assets/style/style.css";
import documentationTemplate from "./documentationTemplate.mdx";

export default {
  parameters: {
    docs: {
      page: documentationTemplate,
    },
  },
};
