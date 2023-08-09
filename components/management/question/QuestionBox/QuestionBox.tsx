import { useState, useContext } from "react";
import { Divider, Paper, IconButton, Tooltip } from "@mui/material";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import "./styles.scss";
import CustomSelect from "@/components/shared/CustomSelect/CustomSelect";
import { MyLessonContext } from "@/config/context/lesson/LessonContext";
import { useTranslation } from "react-i18next";
import { Question } from "@/config/consts/commonType";
import { QUESTION_TYPE } from "@/config/consts/questionTypeConst";
import useGetListQuestionType from "@/hooks/getListQuestionType";
import Paragraph from "@/components/management/question/Paragraph/Paragraph";
import MultipleChoiceSingle from "@/components/management/question/MultipleChoiceSingle/MultipleChoiceSingle";
import MultipleChoice from "@/components/management/question/MultipleChoice/MultipleChoice";
import {
  QUESTION_TYPE_ID,
  QUESTION_TYPE_EMBED,
} from "@/config/consts/questionTypeConst";

type Props = {
  title: string;
  value: number;
  question: Question;
};

const QuestionBox = ({ title, value, question }: Props) => {
  const { isEmbedded, handleChangeQuestionType } = useContext(MyLessonContext);
  const { questionType } = question;
  const [expand, setExpand] = useState(false);
  // const [renderQuestionComponent] = useGetListQuestionType();

  const { t } = useTranslation("question");

  const handleChangeSelect = (selectId: number) => {
    handleChangeQuestionType(selectId, question.order);
  };

  const renderQuestionComponent = () => {
    switch (questionType.id) {
      case QUESTION_TYPE_ID.SHORT_ANSWER_QUESTION:
        return <Paragraph />;
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

  return (
    <>
      <Paper className="embeded-box" variant="outlined">
        <div className="embeded-box__header">
          <div className="embeded-box__header--title">
            <h2>{title}</h2>
            <CustomSelect
              value={value}
              name="select-type"
              listItem={QUESTION_TYPE}
              handleChangeValue={handleChangeSelect}
            />
          </div>
        </div>
        <Divider />
        <div className="embeded-box__main">{renderQuestionComponent()}</div>

        <div className="embeded-box__footer">
          <Tooltip title={!expand ? "Expand" : "Hide"}>
            <IconButton onClick={() => setExpand(!expand)}>
              {!expand ? (
                <ArrowCircleDownOutlinedIcon fontSize="small" />
              ) : (
                <ArrowCircleUpOutlinedIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
          {isEmbedded || (
            <>
              <Tooltip title="Remove Question">
                <IconButton>
                  <DeleteForeverOutlinedIcon />
                </IconButton>
              </Tooltip>
            </>
          )}
        </div>
      </Paper>
    </>
  );
};

export default QuestionBox;
