"use client";
import { useState } from "react";

import { Checkbox } from "@mui/material";
import "./styles.scss";

type Props = {
  name: string;
};

const CustomCheckbox = ({ name }: Props) => {
  const [value, setValue] = useState(false);

  return (
    <>
      <div className="custom-checkbox">
        <Checkbox
          edge="start"
          checked={value}
          onChange={() => setValue(!value)}
          tabIndex={-1}
          disableRipple
        />
        <p>{name}</p>
      </div>
    </>
  );
};

export default CustomCheckbox;
