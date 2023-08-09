import React, { createContext, useReducer } from "react";

import { IQuestionType, Lesson, Question } from "@/config/consts/commonType";
import { QUESTION_TYPE } from "@/config/consts/questionTypeConst";

const initialState: Lesson = {
  id: "",
  content: "",
  category: {
    id: "",
    name: "",
    shortname: "",
    parentID: null,
  },
  image: "",
  internalNote: "",
  description: "",
  questions: [],
  isEmbedded: false,
  isShuffle: false,
  isShared: false,
};

export const MyLessonContext = createContext({
  ...initialState,
  addQuestion: () => {},
  handleChangeQuestionType: (id: number, order: number) => {},
});

const LessonContext = ({ children }: { children: React.ReactNode }) => {
  const [lessonState, dispatchLessonState] = useReducer(
    (state: Lesson, newState: Lesson) => ({
      ...newState,
    }),
    initialState
  );
  const { questions } = lessonState;

  // add question
  const addQuestion = () => {
    const data: Question = {
      id: `${questions.length + 1}`,
      questionType: {
        ...QUESTION_TYPE[0],
      },
      order: questions.length + 1,
    };
    const newState: Lesson = {
      ...lessonState,
      questions: [...questions, data],
    };
    dispatchLessonState(newState);
  };

  /**
   * change question type
   * @param id: number
   * @param order: number
   */
  const handleChangeQuestionType = (id: number, order: number) => {
    const questionTypeData: IQuestionType =
      QUESTION_TYPE.find((question) => question.id === id) || QUESTION_TYPE[0];

    const newQuestions: Question[] = questions.map((question) => {
      if (question.order === order) {
        return { ...question, questionType: questionTypeData };
      }
      return question;
    });

    dispatchLessonState({
      ...lessonState,
      questions: newQuestions,
    });
  };

  return (
    <MyLessonContext.Provider
      value={{ ...lessonState, addQuestion, handleChangeQuestionType }}
    >
      {children}
    </MyLessonContext.Provider>
  );
};

export default LessonContext;
