import { ComponentMeta } from "@storybook/react";
import ExtendedText from "~/components/questions/ExtendedText";
import { extendedTextMock } from "~/mock/qti";

export default {
  title: "components/questions/ExtendedText",
  component: ExtendedText,
} as ComponentMeta<typeof ExtendedText>;

export const basic = () => <ExtendedText data={extendedTextMock} />;
