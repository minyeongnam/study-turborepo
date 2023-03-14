import { ComponentMeta } from "@storybook/react";
import HotText from "~/components/questions/HotText";
import { hotTextMock } from "~/mock/qti";

export default {
  title: "components/questions/HotText",
  component: HotText,
} as ComponentMeta<typeof HotText>;

export const basic = () => <HotText data={hotTextMock} />;
