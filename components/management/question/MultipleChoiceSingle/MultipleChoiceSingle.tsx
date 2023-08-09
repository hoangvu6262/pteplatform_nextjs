import { useState, useEffect, useContext } from "react";
import { TextField } from "@mui/material";

import "./styles.scss";
import Option from "./Option";

// import { lessonContext } from "../../../../pages/admin/AddOrUpdateLesson/AddOrUpdateLesson";
// import { questionTypeContext } from "../Question";
import { useTranslation } from "react-i18next";

const MultipleChoiceSingle = () => {
  // const { setQuestionDTO, questionDTO, isUpdate } = useContext(lessonContext);

  // const { index } = useContext(questionTypeContext);

  const [options, setOptions] = useState([
    {
      name: "Option 1",
      order: 1,
    },
    {
      name: "Option 2",
      order: 2,
    },
  ]);

  const [questionContent, setQuestionContent] = useState("");
  const [solutions, setSolutions] = useState("");

  const { t } = useTranslation("question");

  // event handling onChange in question input
  const handleChangeQuestion = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setQuestionContent(e.target.value);
  };

  /**
   * setlist when question and options are change
   */
  // useEffect(() => {
  //   const solutionOption = options.filter(
  //     (option) => option.order === parseInt(solutions)
  //   );
  //   const listSolutions = solutionOption.map((solution) => ({
  //     valueText: solution.name,
  //   }));

  //   const newlist = [...questionDTO];

  //   newlist[index] = {
  //     ...questionDTO[index],
  //     name: questionContent,
  //     questionOptions: options,
  //     questionSolutions: listSolutions,
  //   };

  //   setQuestionDTO(newlist);
  // }, [options]);

  return (
    <>
      <div className="multiple-choice__accordiom">
        <TextField
          placeholder={t("multipleChoiceSingle.placeholder")}
          name="question"
          // variant="filled"
          required={true}
          value={questionContent}
          onChange={handleChangeQuestion}
        />
      </div>
      <h5>{t("multipleChoiceSingle.optionsTitle")}</h5>
      <div className="multiple-choice__accordiom">
        <Option
          setOptions={setOptions}
          options={options}
          solutions={solutions}
          setSolutions={setSolutions}
        />
      </div>
    </>
  );
};

export default MultipleChoiceSingle;
