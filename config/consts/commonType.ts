export interface ICategory {
  id?: string;
  name: string;
  shortname: string;
  description?: string;
  parentID: string | null;
}

export interface IQuestionType {
  id: number;
  name: string;
  description?: string;
  isEmbedded: boolean;
}

export interface IAnswer {
  id: string;
  answer?: string;
  explanation?: string;
}

export type Question = {
  id: string | number;
  question?: string;
  questionType: IQuestionType;
  explanation?: string;
  answers?: IAnswer[];
  order: number;
};

export type Lesson = {
  id: string;
  content: string;
  category: ICategory;
  image: string;
  internalNote: string;
  description: string;
  questions: Question[];
  isEmbedded: boolean;
  isShuffle: boolean;
  isShared: boolean;
};

export interface IOption {
  name: string;
  order: number;
  isAnswer?: boolean;
}
