import Prompt from "@ui/components/questions/common/Prompt";
import QuestionTitle from "@ui/components/questions/common/QuestionTitle";

interface Props {
  data: any;
}

const InlineChoice = ({ data }: Props) => {
  return (
    <div className="inline-choice">
      <QuestionTitle question={data.qtiItemBody.question} />
      <Prompt qtiPrompt="Prompt" />
      <div className="inline-choice__contents">{data.qtiItemBody.contents}</div>
    </div>
  );
};

export default InlineChoice;
