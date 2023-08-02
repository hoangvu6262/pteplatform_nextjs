import * as yup from "yup";

export const schema = yup.object({
  title: yup.string().required("addOrUpdateLesson.titleRequired"),
  internalNotes: yup.string(),
  description: yup.string(),
  prepareTime: yup
    .number()
    .min(0, "addOrUpdateLesson.prepareTimeValidate")
    .typeError("addOrUpdateLesson.prepareTimeValidate")
    .optional(),
  durationTime: yup
    .number()
    .min(0, "addOrUpdateLesson.durationTimeValidate")
    .typeError("addOrUpdateLesson.prepareTimeValidate")
    .optional(),
  questionContent: yup.string(),
  explanation: yup.string().optional(),
  shared: yup.bool(),
  Desimage: yup.mixed(),
  // .optional()
  // .required("* please choose image")
  // .test("fileSize", "addOrUpdateLesson.fileTooBig", (value) => {
  //   if (value) {
  //     return value[0]?.size ? value[0].size <= 51200 * 1024 : true;
  //   } else {
  //     return yup.mixed().notRequired();
  //   }
  // })
  // .test("type", "addOrUpdateLesson.allowedImgFormat", (value) => {
  //   if (value) {
  //     return value[0]?.type
  //       ? value[0]?.type === "image/jpeg" ||
  //           value[0].type === "image/png" ||
  //           value[0].type === "image/jpg" ||
  //           value[0].type === "image/gif"
  //       : true;
  //   } else {
  //     return yup.mixed().notRequired();
  //   }
  // }),
  shadowing: yup.mixed(),
  // .optional()
  // .required("* please choose image")
  // .test("fileSize", "addOrUpdateLesson.fileTooBig", (value) => {
  //   if (value) {
  //     return value[0]?.size ? value[0].size <= 51200 * 1024 : true;
  //   } else {
  //     return yup.mixed().notRequired();
  //   }
  // })
  // .test("type", "addOrUpdateLesson.allowedAudioFormat", (value) => {
  //   if (value) {
  //     return value[0]?.type
  //       ? value[0]?.type === "audio/mpeg" || value[0]?.type === "audio/flac"
  //       : true;
  //   } else {
  //     return yup.mixed().notRequired();
  //   }
  // }),
});

export const defaultValue = {
  title: "",
  internalNotes: "",
  description: "",
  prepareTime: 40,
  durationTime: 40,
  questionContent: "",
  explaination: "",
  shadowing: "",
  Desimage: "",
  shared: false,
};
