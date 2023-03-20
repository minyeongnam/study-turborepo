import { ComponentMeta } from "@storybook/react";
import Header from "~/components/layout/Header";

export default {
  title: "components/layout/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

export const login = () => <Header />;
export const logout = () => <Header />;
