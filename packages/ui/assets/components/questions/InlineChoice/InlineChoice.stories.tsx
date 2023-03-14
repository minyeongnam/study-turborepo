import { ComponentMeta } from "@storybook/react";
import InlineChoice from "~/components/questions/InlineChoice";
import { inlineChoiceMock } from "~/mock/qti";

export default {
  title: "components/questions/InlineChoice",
  component: InlineChoice,
} as ComponentMeta<typeof InlineChoice>;

export const basic = () => <InlineChoice data={inlineChoiceMock} />;
