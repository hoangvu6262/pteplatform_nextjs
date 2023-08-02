export interface ICategory {
  id?: string | number;
  name: string;
  shortname: string;
  description?: string;
  parentID: string | null;
}

export interface IQuestionType {
  id: string | number;
  name: string;
  description?: string;
}

export interface IAnswer {
  id: string | number;
  answer?: string;
  explanation?: string;
}

export type Question = {
  id: string | number;
  question?: string;
  questionType: IQuestionType;
  explanation: string;
  answers: IAnswer[];
};

export type Lesson = {
  id: string | number;
  content: string | "";
  category: ICategory | "";
  image: string;
  internalNote: string;
  description: string;
  questions: Question[];
  isEmbedded: boolean;
  isShuffle: boolean;
  isShared: boolean;
};
