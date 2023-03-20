export type constantsType<T> = T[keyof T];

export const QUESTION_TYPE = {
  CHOICE: "Choice",
  EXTENDED_TEXT: "ExtendedText",
  HOT_TEXT: "HotText",
  INLINE_CHOICE: "InlineChoice",
  TEXT_ENTRY: "TextEntry",
  UPLOAD: "Upload",
} as const;
export type QuestionType = constantsType<typeof QUESTION_TYPE>;
