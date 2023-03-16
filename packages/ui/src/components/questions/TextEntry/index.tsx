import Input from "@ui/components/form/Input";
import Prompt from "@ui/components/questions/common/Prompt";
import QuestionTitle from "@ui/components/questions/common/QuestionTitle";

interface Props {
  data: any;
}

const TextEntry = ({ data }: Props) => {
  return (
    <div className="text-entry">
      <QuestionTitle question="Question" />
      <Prompt qtiPrompt="Prompt" />
      <Input
        type="text"
        maxLength={parseInt(data.p.qtiTextEntryInteraction.expectedLength)}
        className="text-entry__contents"
      >
        <label htmlFor={data.p.qtiTextEntryInteraction.class}>
          {data.p.text}
        </label>
      </Input>
    </div>
  );
};

export default TextEntry;
