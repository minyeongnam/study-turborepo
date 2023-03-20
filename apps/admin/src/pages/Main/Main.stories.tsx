import { ComponentMeta } from "@storybook/react";

import Main from "~/pages/Main";

export default {
  title: "pages/Main",
  component: Main,
} as ComponentMeta<typeof Main>;

export const basic = () => <Main />;
