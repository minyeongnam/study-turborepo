interface Props {
  question: string;
}
const QuestionTitle = ({ question }: Props) => {
  return (
    <div className="question">
      <strong>{question}</strong>
    </div>
  );
};

export default QuestionTitle;
