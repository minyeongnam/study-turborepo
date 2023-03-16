import UploadInput from "@ui/components/form/Upload";
import Prompt from "@ui/components/questions/common/Prompt";
import QuestionTitle from "@ui/components/questions/common/QuestionTitle";

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
