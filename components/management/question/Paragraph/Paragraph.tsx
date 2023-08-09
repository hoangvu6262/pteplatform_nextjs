import { useContext } from "react";
import { TextField } from "@mui/material";

import "./styles.scss";
// import { questionTypeContext } from "../Question";
// import { lessonContext } from "../../../../pages/admin/AddOrUpdateLesson/AddOrUpdateLesson";
import { useTranslation } from "react-i18next";

const Paragraph = () => {
  //   const { index, question } = useContext(questionTypeContext);
  //   const { questionDTO, setQuestionDTO } = useContext(lessonContext);
  const { t } = useTranslation("question");

  /**
   * Select All Text in an Input Element When it is Focused
   * @param {*} e
   */
  const handleFocus = (e: Event) => {
    const target = e.target as HTMLInputElement;
    target.select();
  };

  //   const handleChangeOptionValue = (e) => {
  //     const newList = [...questionDTO];
  //     newList[index].name = e.target.value;

  //     setQuestionDTO(newList);
  //   };

  return (
    <>
      <div className="paragraph">
        <TextField
          placeholder="Paragraph"
          name="question"
          // variant="filled"
          //   value={question.name}
          required={true}
          multiline
          minRows={2}
          maxRows={10}
          fullWidth
          //   onFocus={handleFocus}
          //   onChange={(e) => handleChangeOptionValue(e)}
        />
        <p>Long Answer Text</p>
      </div>
    </>
  );
};

export default Paragraph;
