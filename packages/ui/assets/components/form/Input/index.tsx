import classNames from "classnames";

interface InputType
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "css"> {
  ref?: React.ForwardedRef<HTMLInputElement>;
  className?: string;
  variant?: "basic" | "round";
  height?: "lg" | "md"; //lg > md
  children?: React.ReactNode; //input 자식요소로 추가되는 버튼이 있는 경우
}

const Input = ({
  id,
  variant = "basic",
  height = "lg",
  ref,
  className,
  children,
  ...rest
}: InputType) => {
  return (
    <div
      className={classNames(
        "input-box",
        `input-box--${variant}`,
        `input-box--${height}`,
        className
      )}
    >
      {children}
      <input ref={ref} {...rest} />
    </div>
  );
};

export default Input;
