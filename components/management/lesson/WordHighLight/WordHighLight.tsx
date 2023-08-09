import { useState } from "react";
import classNames from "classnames";

import "./styles.scss";

type Props = {
  isSelected: boolean;
  text: string;
  index: number;
  paraIndex: number;
};

const WordHighLight = ({ isSelected, text, index, paraIndex }: Props) => {
  const [selected, setSelected] = useState(!!isSelected);
  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <>
      <span
        className={classNames("word-highlight", {
          checked: selected,
        })}
        onClick={handleClick}
      >
        {text}
      </span>
    </>
  );
};

export default WordHighLight;
