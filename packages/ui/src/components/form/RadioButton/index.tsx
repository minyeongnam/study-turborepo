import classNames from "classnames";

interface RadioButtonType
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "css"> {
  className?: string;
  children?: React.ReactNode; // label등
}

const RadioButton = ({ className, children, ...rest }: RadioButtonType) => {
  return (
    <div className={classNames("input-box__radio", [className])}>
      <input type="radio" {...rest} />
      {children}
    </div>
  );
};

export default RadioButton;
