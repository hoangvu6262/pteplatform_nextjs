import { TextField, Grid, IconButton, Tooltip, Radio } from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { IOption } from "@/config/consts/commonType";

import "./styles.scss";
import { useTranslation } from "react-i18next";

const Option = ({
  options,
  setOptions,
  solutions,
  setSolutions,
}: {
  options: IOption[];
  setOptions: Function;
  solutions: string;
  setSolutions: Function;
}) => {
  const { t } = useTranslation("question");

  const handleAddOption = () => {
    const option: IOption = {
      name: `Option ${options.length + 1}`,
      order: options.length + 1,
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
    const optionIndex = options.findIndex(
      (item) => item.order === option.order
    );

    let newState = [...options];
    newState[optionIndex].name = e.target.value;
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
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSolutions(e.target.value);
  };

  return (
    <>
      {options.length > 0 ? (
        options.map((option) => (
          <div className="option" key={option.order}>
            <Grid container>
              <Grid item md={1}>
                <div className="option__left">
                  <Radio
                    checked={solutions === `${option.order}`}
                    onChange={handleChange}
                    value={`${option.order}`}
                    name="radio-buttons"
                    inputProps={{ "aria-label": `${option.order}` }}
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
                      t("multipleChoiceSingle.option.optionPlaceholder") +
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
                  <Tooltip
                    title={t("multipleChoiceSingle.option.tooltipRemove")}
                  >
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
          <p>{t("multipleChoiceSingle.option.plsAddOption")}</p>
        </div>
      )}
      <div className="option__add-option">
        <button
          type="button"
          className="option__add-option-btn"
          onClick={handleAddOption}
        >
          {t("multipleChoiceSingle.option.addOption")}
        </button>
      </div>
    </>
  );
};

export default Option;
