import { store } from "~/store";
import { shallow } from "zustand/shallow";
import { QuestionType, QUESTION_TYPE } from "~/constants/types";

const Header = () => {
  const [setSwitchComponent] = store(
    ({ common: { setSwitchComponent } }) => [setSwitchComponent],
    shallow
  );

  const handleMenu = (components: QuestionType) => {
    setSwitchComponent(components);
  };

  return (
    <header>
      <h1
        style={{ marginBottom: "30px", fontSize: "32px", fontWeight: "bold" }}
      >
        Admin
      </h1>
      <ul>
        <li>
          <button
            type="button"
            onClick={() => handleMenu(QUESTION_TYPE.CHOICE)}
          >
            Choice
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleMenu(QUESTION_TYPE.INLINE_CHOICE)}
          >
            Inline Choice
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleMenu(QUESTION_TYPE.TEXT_ENTRY)}
          >
            Text Entry
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleMenu(QUESTION_TYPE.EXTENDED_TEXT)}
          >
            Extended Text
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleMenu(QUESTION_TYPE.HOT_TEXT)}
          >
            Hot Text
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleMenu(QUESTION_TYPE.UPLOAD)}
          >
            Upload
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
