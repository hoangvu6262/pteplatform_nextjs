import { TextField, Grid, IconButton, Tooltip, Checkbox } from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { IOption } from "@/config/consts/commonType";

import "./styles.scss";
import { useTranslation } from "react-i18next";

const Option = ({
  options,
  setOptions,
}: {
  options: IOption[];
  setOptions: Function;
}) => {
  const { t } = useTranslation("question");

  const handleAddOption = () => {
    const option = {
      name: `Option ${options.length + 1}`,
      order: options.length + 1,
      isAnswer: false,
    };
    let newState = [...options];
    newState.push(option);
    setOptions(newState);
  };

  const handleDeleteOption = (option: IOption) => {
    const optionIndex = options.findIndex(
      (item) => item.order === option.order
    );

    let newState = [...options];
    newState.splice(optionIndex, 1);
    const newOptions = newState.map((option) =>
      option.order > options[optionIndex].order
        ? { ...option, order: option.order - 1 }
        : option
    );

    setOptions(newOptions);
  };

  const handleChangeOptionValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    option: IOption
  ) => {
    const target = e.target as HTMLInputElement;
    const optionIndex = options.findIndex(
      (item) => item.order === option.order
    );

    let newState = [...options];
    newState[optionIndex].name = target.value;
    setOptions(newState);
  };

  /**
   * Select All Text in an Input Element When it is Focused
   * @param {*} e
   */
  // const handleFocus = (e) => {
  //   e.target.select();
  // };

  /**
   * choose the option as the answer
   * @param {*} e
   * @param {*} options
   */
  const handleCheckAnswer = (
    e: React.ChangeEvent<HTMLInputElement>,
    option: IOption
  ) => {
    // const target = e.target as HTMLInputElement;
    const optionIndex = options.findIndex(
      (item) => item.order === option.order
    );

    let newState = [...options];
    newState[optionIndex].isAnswer = e.target.checked;
    setOptions(newState);
  };

  return (
    <>
      {options.length > 0 ? (
        options.map((option) => (
          <div className="option" key={option.order}>
            <Grid container>
              <Grid item md={1}>
                <div className="option__left">
                  <Checkbox
                    checked={option.isAnswer}
                    onChange={(e) => handleCheckAnswer(e, option)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <div className="option__left-title">
                    <p>{option.order}.</p>
                  </div>
                </div>
              </Grid>
              <Grid item md={10}>
                <div className="option__main">
                  <TextField
                    placeholder={
                      t("multipleChoice.option.optionPlaceholder") +
                      option.order
                    }
                    name={option.name}
                    value={option.name}
                    required={true}
                    // variant="standard"
                    // onFocus={handleFocus}
                    onChange={(e) => handleChangeOptionValue(e, option)}
                  />
                </div>
              </Grid>
              <Grid item md={1}>
                <div className="option__btn--delete">
                  <Tooltip title={t("multipleChoice.option.tooltipRemove")}>
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDeleteOption(option)}
                    >
                      <ClearOutlinedIcon />
                    </IconButton>
                  </Tooltip>
                </div>
              </Grid>
            </Grid>
          </div>
        ))
      ) : (
        <div className="option__empty">
          <p>{t("multipleChoice.option.plsAddOption")}</p>
        </div>
      )}
      <div className="option__add-option">
        <button
          type="button"
          className="option__add-option-btn"
          onClick={handleAddOption}
        >
          {t("multipleChoice.option.addOption")}
        </button>
      </div>
    </>
  );
};

export default Option;
