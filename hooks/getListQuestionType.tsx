import { useState, useEffect } from "react";
import Paragraph from "@/components/management/question/Paragraph/Paragraph";
import MultipleChoiceSingle from "@/components/management/question/MultipleChoiceSingle/MultipleChoiceSingle";
import MultipleChoice from "@/components/management/question/MultipleChoice/MultipleChoice";
import {
  QUESTION_TYPE_ID,
  QUESTION_TYPE_EMBED,
} from "@/config/consts/questionTypeConst";

const useGetListQuestionType = () => {
  const [listType, setListType] = useState([]);
  const renderQuestionComponent = (id: number) => {
    switch (id) {
      // case QUESTION_TYPE_ID.SHORT_ANSWER_QUESTION:
      //   return ShortAnswerQuestion;
      case QUESTION_TYPE_ID.PARAGRAPH:
        return <Paragraph />;
      case QUESTION_TYPE_ID.SINGLE_CHOICE:
        return <MultipleChoiceSingle />;
      case QUESTION_TYPE_ID.CHECKBOX:
        return <MultipleChoice />;
      // case QUESTION_TYPE_ID.FIB_EMPTY_BLANK:
      //   return FIBEmptyBlank;
      // case QUESTION_TYPE_ID.FIB_DROP_BOX:
      //   return FIBDropbox;
      // case QUESTION_TYPE_ID.FIB_DRAG_AND_DROP:
      //   return FIBDragAndDrop;
      // case QUESTION_TYPE_ID.FIB_HIGH_LIGHT_INCORRECT:
      //   return FIBHighLightIncorrect;
      default:
        return null;
    }
  };

  // useEffect(() => {
  //   globalAPI.getQuestionType().then((res) => {
  //     const List = res.data.map((item) => {
  //       return { ...item, component: addComponent(item.id) };
  //     });

  //     setListType(
  //       List.filter(
  //         (type) => type.name?.startsWith(QUESTION_TYPE_EMBED) === isEmbedded
  //       )
  //     );
  //   });
  // }, [isEmbedded]);

  return [renderQuestionComponent];
};

export default useGetListQuestionType;
