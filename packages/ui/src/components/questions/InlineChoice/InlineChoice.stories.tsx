import { ComponentMeta } from "@storybook/react";
import InlineChoice from "@ui/components/questions/InlineChoice";
import { inlineChoiceMock } from "@ui/mock/qti";

export default {
  title: "@ui/components/questions/InlineChoice",
  component: InlineChoice,
} as ComponentMeta<typeof InlineChoice>;

export const basic = () => <InlineChoice data={inlineChoiceMock} />;
