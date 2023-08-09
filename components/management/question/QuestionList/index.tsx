import React, { useEffect, useContext } from "react";
import { IconButton, Tooltip } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

import "./styles.scss";
import QuestionBox from "../QuestionBox/QuestionBox";
import { MyLessonContext } from "@/config/context/lesson/LessonContext";
import { useTranslation } from "react-i18next";

const QuestionList = () => {
  const { isEmbedded, questions, addQuestion } = useContext(MyLessonContext);

  const { t } = useTranslation("question");

  const renderListQuestion = () =>
    questions.length > 0 &&
    questions?.map((question) => {
      const { order, questionType } = question;
      return (
        <div className="question-container" key={order}>
          <QuestionBox
            title={questionType.name}
            value={questionType.id}
            question={question}
          />
        </div>
      );
    });

  return (
    <>
      <div className="list-question">{renderListQuestion()}</div>
      {isEmbedded || (
        <Tooltip title={t("questionList.tooltipAddQuestion")} placement="right">
          <IconButton onClick={addQuestion}>
            <ControlPointIcon />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

export default QuestionList;
