interface Prop {
  qtiPrompt: string;
}
const Prompt = ({ qtiPrompt }: Prop) => {
  return (
    <div className="prompt">
      <strong>{qtiPrompt}</strong>
    </div>
  );
};

export default Prompt;
