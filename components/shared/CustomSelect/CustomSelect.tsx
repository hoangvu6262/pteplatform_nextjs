import { Controller, useFormContext } from "react-hook-form";
import classNames from "classnames";

import React, { useState, useEffect } from "react";
import { Box, FormControl, Select, MenuItem } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

import "./styles.scss";
import { QUESTION_TYPE } from "@/config/consts/questionTypeConst";

interface IListItem {
  id: number;
  name: string;
}

interface IError {
  id: string | number;
  name: string;
}

type Props = {
  value: number;
  name?: string;
  listItem: IListItem[];
  handleChangeValue: (id: number) => void;
};

const CustomSelect = ({
  value = QUESTION_TYPE[0].id,
  name,
  listItem = [],
  handleChangeValue,
}: Props) => {
  const onChange = (e: SelectChangeEvent<number>) => {
    handleChangeValue(e.target.value as number);
  };

  return (
    <>
      <div className="custom-select">
        <Box>
          <FormControl sx={{ m: 1, minWidth: 200, height: 50 }}>
            <Select
              id={name}
              name={name}
              displayEmpty
              onChange={(e) => onChange(e)}
              value={value}
              inputProps={{ "aria-label": "Without label" }}
            >
              {listItem.map((item) => (
                <MenuItem value={item.id} key={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
    </>
  );
};

export default CustomSelect;
