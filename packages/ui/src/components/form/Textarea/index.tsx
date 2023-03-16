import classNames from "classnames";

interface TextareaType
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "css"> {
  className?: string;
}
const Textarea = ({ className, id, ...rest }: TextareaType) => {
  return (
    <div id={id} className={classNames("textareabox", [className])}>
      <textarea className={classNames([className])} {...rest} />
    </div>
  );
};

export default Textarea;
