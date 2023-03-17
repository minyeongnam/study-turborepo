import { ComponentMeta } from "@storybook/react";
import HotText from "@ui/components/questions/HotText";
import { hotTextMock } from "@ui/mock/qti";

export default {
  title: "@ui/components/questions/HotText",
  component: HotText,
} as ComponentMeta<typeof HotText>;

export const basic = () => <HotText data={hotTextMock} />;
