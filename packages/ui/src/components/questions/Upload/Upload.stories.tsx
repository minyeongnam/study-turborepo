import { ComponentMeta } from "@storybook/react";
import Upload from "@ui/components/questions/Upload";

export default {
  title: "@ui/components/questions/Upload",
  component: Upload,
} as ComponentMeta<typeof Upload>;

export const basic = () => <Upload />;
