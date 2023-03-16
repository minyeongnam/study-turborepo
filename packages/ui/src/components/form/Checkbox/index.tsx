import classNames from "classnames";

interface CheckboxType
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "css"> {
  text: string;
  className?: string;
}
const Checkbox = ({ id, checked, text, className, ...rest }: CheckboxType) => {
  return (
    <div className={classNames("check-box", { className })}>
      <input checked={checked} value={id} id={id} type="checkbox" {...rest} />
      <label htmlFor={id} className="check-box__label">
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
