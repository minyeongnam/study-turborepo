import classNames from "classnames";
import { useRef, useState } from "react";

export interface UploadType
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "css"> {
  className?: string;
}

const UploadInput = ({ className, id, ...rest }: UploadType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [Files, setFiles] = useState<File[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.currentTarget.files || []);
    setFiles((prev) => {
      return [...prev, ...newFiles];
    });
  };

  return (
    <div id={id} className={classNames("upload", [className])}>
      <input
        type="file"
        id="uploadFile"
        style={{ display: "none" }}
        multiple
        onChange={handleChange}
        ref={inputRef}
      />
      <label htmlFor="uploadFile">Select File</label>
      <button type="button">Upload</button>
      <ul>
        {Files.map((file, index) => {
          return <li key={index}>{file.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default UploadInput;
