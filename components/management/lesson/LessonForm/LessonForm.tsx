"use client";
import { useState, useContext, memo } from "react";
import {
  Grid,
  CircularProgress,
  Tooltip,
  IconButton,
  Divider,
} from "@mui/material";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import { useFormContext } from "react-hook-form";

import CustomInput from "@/components/shared/CustomInput/CustomInput";
import FIBContent from "@/components/management/question/FIBContent/FIBContent";
import { MyLessonContext } from "@/config/context/lesson/LessonContext";

const LessonForm = () => {
  const { isEmbedded } = useContext(MyLessonContext);
  const [expand, setExpand] = useState(false);

  console.log(isEmbedded);

  const renderFIBParagraph = (): JSX.Element | null => {
    if (!isEmbedded) return null;
    return (
      <section className="lesson__main--section">
        <FIBContent
          fibContent='ccc "css-modules",'
          // setFibContent={setFibContent}
          handleFibContent={() => {}}
        />
      </section>
    );
  };

  return (
    <div className="lesson-form">
      <Grid container spacing={3}>
        <Grid item lg={9} xs={24}>
          <div className="lesson__col lesson__main">
            <div className="lesson__head">
              <div className="lesson__head-title-lesson">
                {/* <h6>
                  {isUpdate
                    ? `${t("lessonForm.updateTitle", { ns: "lesson" })} ${id}`
                    : t("lessonForm.createTitle", { ns: "lesson" })}
                </h6> */}
                {/* {isUpdate && (
                  <button
                    type="button"
                    onClick={handleShow}
                    className={lessonStatus ? "btn-active" : "btn-disable"}
                  >
                    {lessonStatus
                      ? t("lessonForm.approved", { ns: "lesson" })
                      : t("lessonForm.approve", { ns: "lesson" })}
                  </button>
                )} */}
              </div>
            </div>

            <div className="lesson__main">
              <section className="lesson__main--section">
                <CustomInput name="title" label="Title" />
                <CustomInput
                  name="questionContent"
                  label="Content"
                  multiline={true}
                  rows={2}
                />
                <CustomInput
                  name="description"
                  label="Description"
                  multiline={true}
                  rows={2}
                />
                <CustomInput
                  placeholder="For internal circulation only"
                  name="internalNotes"
                  label="Internal Notes"
                  multiline={true}
                  rows={2}
                />

                {/* <CustomQuill
                  title={t("lessonForm.lessonAddExplanation", { ns: "lesson" })}
                  name="explanation"
                  updateData={updateData?.explanation}
                  status={status}
                /> */}
                <div className="lesson__main--section-di">
                  <div>
                    <Tooltip title="aaaaa">
                      <button
                        type="button"
                        // onClick={handleAudioContent}
                        className="show-btn"
                      >
                        Generate Voice
                      </button>
                    </Tooltip>

                    <div>
                      {/* <DescribeImg name="Desimage" updateData={updateData} /> */}
                      <p className="lesson__head--input-err">file is too big</p>
                    </div>
                  </div>
                  <Tooltip title={!expand ? "More" : "Less"} placement="left">
                    <IconButton onClick={() => setExpand(!expand)}>
                      {!expand ? (
                        <ArrowCircleDownOutlinedIcon />
                      ) : (
                        <ArrowCircleUpOutlinedIcon />
                      )}
                    </IconButton>
                  </Tooltip>
                </div>
                <Divider />
                {/* {audioContent && (
                  <>
                    <AudioContainerList
                      lessonMedia={lessonMedia}
                      setLessonMedia={setLessonMedia}
                      content={audioContent}
                      isUpdate={isUpdate}
                    />
                  </>
                )}
                <CheckboxGroup /> */}
              </section>
              {renderFIBParagraph()}
            </div>
          </div>
          <div>
            {/* <QuestionList
              fibContent={fibContent}
              setFibContent={setFibContent}
              questionDTO={questionDTO}
            /> */}
          </div>
        </Grid>
        <Grid item lg={3} xs={24}>
          <div className="lesson__main-side">
            {/* <AdminSelectLesson isUpdate={true} /> */}

            <div className="lesson__col lesson__toolbar">
              <div className="lesson__toolbar--tool">
                <div className="lesson__toolbar--time-gr">
                  <span className="lesson__time--title">Edit Time</span>
                  <div className="lesson__time--wrapper">
                    <div className="lesson__time--input">
                      <span>Prepare Time</span>
                      <input
                        type="number"
                        // {...register("prepareTime")}
                        defaultValue={40}
                      />
                    </div>
                    <p>error prepareTime</p>

                    <div className="lesson__time--input">
                      <span>Duration Time</span>
                      <input
                        type="number"
                        // {...register("durationTime")}
                        defaultValue={40}
                      />
                    </div>
                    <p>error durationTime</p>
                  </div>
                </div>
              </div>
              <div className="lesson__toolbar--btns">
                {status === "loading" ? (
                  <CircularProgress />
                ) : (
                  <button
                    className="lesson__toolbar--submit"
                    // onClick={handleSubmit(onSubmit)}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default memo(LessonForm);
