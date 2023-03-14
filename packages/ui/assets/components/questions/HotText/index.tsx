import Prompt from "../common/Prompt";
import QuestionTitle from "../common/QuestionTitle";

interface Props {
  data: any;
}

const HotText = ({ data }: Props) => {
  return (
    <div className="hot-text">
      <QuestionTitle question="Question" />
      <Prompt qtiPrompt="Prompt" />
      <div className="hot-text__contents">
        {data.qtiHottextInteraction.contents}
      </div>
    </div>
  );
};

export default HotText;
