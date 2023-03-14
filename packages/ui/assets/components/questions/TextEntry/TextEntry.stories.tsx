import { ComponentMeta } from "@storybook/react";
import TextEntry from "~/components/questions/TextEntry";
import { textEntryMock } from "~/mock/qti";

export default {
  title: "components/questions/TextEntry",
  component: TextEntry,
} as ComponentMeta<typeof TextEntry>;

export const basic = () => <TextEntry data={textEntryMock} />;
