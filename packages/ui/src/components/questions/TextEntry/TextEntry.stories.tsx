import { ComponentMeta } from "@storybook/react";
import TextEntry from "@ui/components/questions/TextEntry";
import { textEntryMock } from "@ui/mock/qti";

export default {
  title: "@ui/components/questions/TextEntry",
  component: TextEntry,
} as ComponentMeta<typeof TextEntry>;

export const basic = () => <TextEntry data={textEntryMock} />;
