import { useMemo } from "react";
import style from "./Cell.module.css";
import { CellProps } from "./Cell.types";

const defineStyles = (x: number, y: number) => {
  return Math.floor(x / 3) % 2 === Math.floor(y / 3) % 2
    ? style.bgwhite
    : style.bggrey;
};

export const Cell = ({
  value,
  posX,
  posY,
  onPress,
  cellSelected,
  initialBoard,
}: CellProps) => {
  const backgroundColor = useMemo(() => defineStyles(posX, posY), [posX, posY]);

  const isCellFixed = !!initialBoard[posX][posY];

  const selectedStyle = useMemo(() => {
    if (cellSelected?.x === posX && cellSelected?.y === posY) {
      return style.selected;
    }
    return "";
  }, [cellSelected, posX, posY]);

  const handlePress = () => {
    onPress(posX, posY);
  };

  return (
    <div
      role="gridcell"
      className={`${style.container} ${backgroundColor} ${selectedStyle}`}
      onClick={handlePress}
    >
      {isCellFixed ? (
        <p className={style.fixed}>{initialBoard[posX][posY]}</p>
      ) : (
        <p className={style.nofixed}> {value || null} </p>
      )}
    </div>
  );
};
