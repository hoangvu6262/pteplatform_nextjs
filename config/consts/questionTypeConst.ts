import { IQuestionType } from "@/config/consts/commonType";

export const QUESTION_TYPE_ID = {
  SHORT_ANSWER_QUESTION: 2,
  PARAGRAPH: 4,
  SINGLE_CHOICE: 5,
  CHECKBOX: 6,
  FIB_EMPTY_BLANK: 14,
  FIB_DROP_BOX: 15,
  FIB_DRAG_AND_DROP: 16,
  FIB_HIGH_LIGHT_INCORRECT: 17,
};

export const QUESTION_TYPE: IQuestionType[] = [
  {
    id: QUESTION_TYPE_ID.SHORT_ANSWER_QUESTION,
    name: "Short Answer Question",
    isEmbedded: false,
  },
  {
    id: QUESTION_TYPE_ID.PARAGRAPH,
    name: "Paragraph",
    isEmbedded: false,
  },
  {
    id: QUESTION_TYPE_ID.SINGLE_CHOICE,
    name: "Single Choice Answer",
    isEmbedded: false,
  },
  {
    id: QUESTION_TYPE_ID.CHECKBOX,
    name: "Multiple Choice Answer",
    isEmbedded: false,
  },
  {
    id: QUESTION_TYPE_ID.FIB_EMPTY_BLANK,
    name: "FIB Empty Blank",
    isEmbedded: true,
  },
  {
    id: QUESTION_TYPE_ID.FIB_DROP_BOX,
    name: "FIB Drop Box",
    isEmbedded: true,
  },
  {
    id: QUESTION_TYPE_ID.FIB_DRAG_AND_DROP,
    name: "FIB Drag and Drop",
    isEmbedded: true,
  },
  {
    id: QUESTION_TYPE_ID.FIB_HIGH_LIGHT_INCORRECT,
    name: "FIB Highlight Incorrect",
    isEmbedded: true,
  },
];

export const QUESTION_TYPE_EMBED = "Embed";
