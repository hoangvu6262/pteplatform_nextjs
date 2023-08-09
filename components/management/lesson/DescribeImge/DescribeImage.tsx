import React, { useState, useEffect, useContext } from "react";
import { Tooltip } from "@mui/material";
import { useFormContext } from "react-hook-form";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";

import "./styles.scss";
import TYPE from "@/config/consts/mediaType";
// import { lessonContext } from "../../../../pages/admin/AddOrUpdateLesson/AddOrUpdateLesson";
// import { useTranslation } from 'react-i18next';

const DescribeImage = ({ name }: { name: string }) => {
  const [imageName, setImageName] = useState("");
  const { register } = useFormContext();

  //   const { updateData, status } = useContext(lessonContext);

  //   const { t } = useTranslation('lesson');

  //   useEffect(() => {
  //     if (updateData?.lessonMediaDTOs?.length > 0) {
  //       const image = updateData.lessonMediaDTOs.filter(
  //         (item) => item.type === TYPE.IMAGE
  //       );
  //       setImageName(
  //         image.length > 0 && image[0].lessonMediaLink.split("/").pop()
  //       );
  //     }
  //   }, [updateData]);

  //   useEffect(() => {
  //     status === "success" && setImageName("");
  //   }, [status]);

  // show preview image
  const showPreviewImage = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      let imageFile = target.files[0];
      setImageName(imageFile.name);
    } else {
      setImageName("");
    }
  };

  return (
    <>
      <div className="describe-img">
        <label htmlFor={name}>
          <Tooltip title="Describe Image">
            <PhotoSizeSelectActualOutlinedIcon />
          </Tooltip>
          <p className="small">{imageName || "Choose Image"}</p>
        </label>
        <input
          className="describe-img__btn-add"
          id={name}
          type="file"
          //   name={name}
          {...register(name)}
          onChange={(e) => showPreviewImage}
        />
      </div>
    </>
  );
};

export default DescribeImage;
