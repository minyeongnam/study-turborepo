import classNames from "classnames";
import Textarea from "~/components/form/Textarea";
import Prompt from "../common/Prompt";
import QuestionTitle from "../common/QuestionTitle";

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
