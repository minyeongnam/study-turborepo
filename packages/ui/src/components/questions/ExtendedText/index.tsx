import Textarea from "@ui/components/form/Textarea";
import Prompt from "@ui/components/questions/common/Prompt";
import QuestionTitle from "@ui/components/questions/common/QuestionTitle";

interface Props {
  data: any;
}

const ExtendedText = ({ data }: Props) => {
  return (
    <div className="extended-text">
      <QuestionTitle question="Question" />
      <Prompt qtiPrompt="Prompt" />
      <div className="extended-text__contents">
        <Textarea className={data.qtiExtendedTextInteraction.class} />
      </div>
    </div>
  );
};

export default ExtendedText;
