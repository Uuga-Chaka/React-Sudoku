import { useMemo } from "react";
import { useSudokuContext } from "../useSudokuContext";
import style from "./Cell.module.css";
import { CellProps } from "./Cell.types";

const defineStyles = (x: number, y: number) => {
  return Math.floor(x / 3) % 2 === Math.floor(y / 3) % 2
    ? style.bgwhite
    : style.bggrey;
};

export const Cell = ({ value, posX, posY }: CellProps) => {
  const backgroundColor = useMemo(() => defineStyles(posX, posY), [posX, posY]);
  const { handleCellSelected, cellSelected } = useSudokuContext();

  const selectedStyle = useMemo(() => {
    if (cellSelected?.x === posX && cellSelected?.y === posY) {
      return style.selected;
    }
    return "";
  }, [cellSelected, posX, posY]);

  return (
    <div
      className={`${style.container} ${backgroundColor} ${selectedStyle}`}
      onClick={() => handleCellSelected(posX, posY)}
    >
      <p>{value || null}</p>
    </div>
  );
};
