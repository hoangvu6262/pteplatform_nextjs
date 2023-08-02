import React from "react";
import { useFormContext } from "react-hook-form";

import "./styles.scss";
import { TextField } from "@mui/material";

type Props = {
  label: string;
  name: string;
  type?: string;
  maxRows?: number;
  multiline?: boolean;
  placeholder?: string;
  rows?: number;
};

const CustomInput = ({
  label,
  name,
  type = "text",
  maxRows = 8,
  rows = 1,
  multiline = false,
  placeholder,
}: Props) => {
  const { register } = useFormContext();
  return (
    <div className="cus-input ">
      <p>{label}</p>
      <TextField
        // name={name}
        {...register(name)}
        // label={label}
        variant="outlined"
        placeholder={placeholder}
        type={type}
        fullWidth
        multiline={multiline}
        minRows={rows}
        maxRows={maxRows}
        InputLabelProps={{ shrink: true }}
      />
      {/* <p className="cus-input--err">{errors && t(errors[name]?.message)}</p> */}
    </div>
  );
};

export default CustomInput;
