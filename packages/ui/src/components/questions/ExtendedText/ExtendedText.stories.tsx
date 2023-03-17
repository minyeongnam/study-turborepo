import { ComponentMeta } from "@storybook/react";
import ExtendedText from "@ui/components/questions/ExtendedText";
import { extendedTextMock } from "@ui/mock/qti";

export default {
  title: "@ui/components/questions/ExtendedText",
  component: ExtendedText,
} as ComponentMeta<typeof ExtendedText>;

export const basic = () => <ExtendedText data={extendedTextMock} />;
