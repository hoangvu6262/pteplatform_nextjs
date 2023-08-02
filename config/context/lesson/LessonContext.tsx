import React, { createContext, useReducer } from "react";

import { Lesson } from "@/config/consts/commonType";

const initialState = {
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

export const MyLessonContext = createContext<Lesson>(initialState);

const LessonContext = ({ children }: { children: React.ReactNode }) => {
  const [lessonState, dispatchLessonState] = useReducer(
    (state: Lesson, newState: Lesson) => ({
      ...state,
      ...newState,
    }),
    initialState
  );

  return (
    <MyLessonContext.Provider value={{ ...lessonState }}>
      {children}
    </MyLessonContext.Provider>
  );
};

export default LessonContext;
