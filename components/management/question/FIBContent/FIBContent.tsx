import React, { useContext } from "react";
import { Paper, Divider } from "@mui/material";

import "./styles.scss";
import ParagraphHighlight from "../../lesson/ParagraphHighLight/ParagraphHighLight";

type Props = {
  fibContent: string;
  handleFibContent: Function;
};

const FIBContent = ({ fibContent, handleFibContent }: Props) => {
  //   const { setQuestionDTO, questionDTO, isUpdate } = useContext(lessonContext);
  //   const { t } = useTranslation('question');

  const handleClick = () => {
    handleFibContent();
    // setQuestionDTO([]);
  };

  return (
    <>
      <Divider />
      <Paper className="fill-in-the-blank">
        <div className="fill-in-the-blank__input">
          <button
            type="button"
            className="fill-in-the-blank__input-btn"
            onClick={handleClick}
          >
            Show
          </button>
        </div>
        {fibContent && (
          <div className="fill-in-the-blank__paragraph">
            <h6>Paragraph Highlight</h6>
            <ParagraphHighlight
              content={fibContent}
              //   isUpdate={isUpdate}
              //   listSelected={questionDTO}
            />
          </div>
        )}
      </Paper>
    </>
  );
};

export default FIBContent;
