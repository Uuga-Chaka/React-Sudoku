import { useMemo } from "react";
import style from "./Cell.module.css";
import { CellProps } from "./Cell.types";

const defineStyles = (x: number, y: number) => {
  return Math.floor(x / 3) % 2 === Math.floor(y / 3) % 2 ? "#fff" : "#f8f8f8";
};

export const Cell = ({ value, posX, posY }: CellProps) => {
  const backgroundColor = useMemo(() => defineStyles(posX, posY), [posX, posY]);
  return (
    <div
      className={style.container}
      style={{ backgroundColor: backgroundColor }}
    >
      {!!value && value}
    </div>
  );
};
