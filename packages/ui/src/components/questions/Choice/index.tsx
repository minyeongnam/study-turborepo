import Checkbox from "@ui/components/form/Checkbox";
import Prompt from "@ui/components/questions/common/Prompt";
import QuestionTitle from "@ui/components/questions/common/QuestionTitle";

interface Props {
  data: any;
}

const Choice = ({ data }: Props) => {
  return (
    <div className="choice">
      <QuestionTitle question="Question" />
      <Prompt qtiPrompt={data.qtiItemBody.qtiChoiceInteraction.qtiPrompt} />
      <ul>
        {Object.entries(
          data.qtiItemBody.qtiChoiceInteraction.qtiSimpleChoice
        ).map(([key, { identifier, text }]: any) => {
          return (
            <li key={identifier} className="choice__item">
              <Checkbox
                type="checkbox"
                name="choice"
                id={identifier}
                value={identifier}
                text={text}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Choice;
