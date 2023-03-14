import { shallow } from "zustand/shallow";
import Choice from "~/components/questions/Choice";
import ExtendedText from "~/components/questions/ExtendedText";
import HotText from "~/components/questions/HotText";
import InlineChoice from "~/components/questions/InlineChoice";
import TextEntry from "~/components/questions/TextEntry";
import Upload from "~/components/questions/Upload";
import { QUESTION_TYPE } from "~/constants/types";
import {
  choiceMock,
  extendedTextMock,
  hotTextMock,
  inlineChoiceMock,
  textEntryMock,
} from "~/mock/qti";
import { store } from "~/store";
import Header from "~/components/layout/Header";

const Main = () => {
  const components = {
    [QUESTION_TYPE.CHOICE]: <Choice data={choiceMock} />,
    [QUESTION_TYPE.INLINE_CHOICE]: <InlineChoice data={inlineChoiceMock} />,
    [QUESTION_TYPE.TEXT_ENTRY]: <TextEntry data={textEntryMock} />,
    [QUESTION_TYPE.EXTENDED_TEXT]: <ExtendedText data={extendedTextMock} />,
    [QUESTION_TYPE.HOT_TEXT]: <HotText data={hotTextMock} />,
    [QUESTION_TYPE.UPLOAD]: <Upload />,
  };

  const [switchComponent] = store(
    ({ common: { switchComponent } }) => [switchComponent],
    shallow
  );

  return (
    <>
      <Header />
      <main>{components[switchComponent]}</main>
    </>
  );
};

export default Main;
