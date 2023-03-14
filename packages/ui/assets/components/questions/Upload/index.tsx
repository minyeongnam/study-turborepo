import UploadInput from "~/components/form/Upload";
import Prompt from "../common/Prompt";
import QuestionTitle from "../common/QuestionTitle";

const Upload = () => {
  return (
    <div className="upload">
      <QuestionTitle question="Question" />
      <Prompt qtiPrompt="Prompt" />
      <div className="upload__contents">
        <UploadInput />
      </div>
    </div>
  );
};

export default Upload;
