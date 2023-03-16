import { QuestionType, QUESTION_TYPE } from "~/constants/types";
import { SliceType } from "~/store";

interface State {
  switchComponent: QuestionType;
}
interface Actions {
  setSwitchComponent: (payload: QuestionType) => void;
}

export type CommonSliceType = Actions & State;

const initialState: State = { switchComponent: QUESTION_TYPE.CHOICE };

export const commonSlice: SliceType<CommonSliceType> = (set) => ({
  ...initialState,
  setSwitchComponent: (payload) =>
    set(
      ({ common }) => {
        common.switchComponent = payload;
      },
      undefined,
      "common/setSwitchComponent"
    ),
});
