import { ComponentMeta } from "@storybook/react";
import Upload from "~/components/questions/Upload";

export default {
  title: "components/questions/Upload",
  component: Upload,
} as ComponentMeta<typeof Upload>;

export const basic = () => <Upload />;
