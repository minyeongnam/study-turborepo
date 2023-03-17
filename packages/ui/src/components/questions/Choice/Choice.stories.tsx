import { ComponentMeta } from "@storybook/react";
import Choice from "@ui/components/questions/Choice";
import { choiceMock } from "@ui/mock/qti";
import {
  Title,
  Subtitle,
  Description,
  ArgsTable,
  CURRENT_SELECTION,
  Source,
} from "@storybook/addon-docs";

export default {
  title: "@ui/components/questions/Choice",
  component: Choice,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Choice</Title>
          <Subtitle>객관식 다중 선택 문항</Subtitle>
          <Description>객관식 다중 선택 문항입니다.</Description>
          <Basic />
          <Source />
          <ArgsTable story={CURRENT_SELECTION} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Choice>;

export const Basic = () => <Choice data={choiceMock} />;
