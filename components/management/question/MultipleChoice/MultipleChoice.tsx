import { useState, useEffect, useContext } from "react";
import { TextField } from "@mui/material";

import "./styles.scss";
import Option from "./Option";
// import { lessonContext } from "../../../../pages/admin/AddOrUpdateLesson/AddOrUpdateLesson";
// import { questionTypeContext } from "../Question";
// import { useTranslation } from 'react-i18next';

const MultipleChoice = () => {
  // const { setQuestionDTO, questionDTO, isUpdate } = useContext(lessonContext);
  // const { index } = useContext(questionTypeContext);

  const [options, setOptions] = useState([
    {
      name: "Option 1",
      order: 1,
      isAnswer: false,
    },
    {
      name: "Option 2",
      order: 2,
      isAnswer: false,
    },
  ]);

  const [questionContent, setQuestionContent] = useState("");

  // const { t } = useTranslation('question');

  // event handling onChange in question input
  const handleChangeQuestion = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setQuestionContent(target.value);
  };

  /**
   * setQuestionContentDTO when question and options are change
   */
  // useEffect(() => {
  //   const solutions = options.filter((option) => option.isAnswer === true);
  //   const listSolutions = solutions.map((solution) => ({
  //     valueText: solution.name,
  //   }));

  //   const newQuestionDTO = [...questionDTO];

  //   newQuestionDTO[index] = {
  //     ...questionDTO[index],
  //     name: questionContent,
  //     questionOptions: options,
  //     questionSolutions: listSolutions,
  //   };

  //   setQuestionDTO(newQuestionDTO);
  // }, [options]);

  return (
    <>
      <div className="multiple-choice__accordiom">
        <TextField
          placeholder="Multiple Choice Question"
          name="question"
          required={true}
          value={questionContent}
          onChange={() => handleChangeQuestion}
        />
      </div>
      <h5>Options</h5>
      <div className="multiple-choice__accordiom">
        <Option setOptions={setOptions} options={options} />
      </div>
    </>
  );
};

export default MultipleChoice;
