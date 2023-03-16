import classNames from "classnames";

type SelectOptions = {
  key: string | undefined;
  value: string | undefined;
  label: string;
};

interface SelectboxType
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "css"> {
  className?: string;
  options?: SelectOptions[];
}

const renderOptions = (options?: SelectOptions[]) => {
  return options?.map(({ key, value, label }) => (
    <option key={key} value={value}>
      {label}
    </option>
  ));
};

const Selectbox = ({ id, options, className, ...rest }: SelectboxType) => {
  return (
    <div className="selectbox">
      <select id={id} className={classNames([className])} {...rest}>
        {renderOptions(options)}
      </select>
    </div>
  );
};

export default Selectbox;
