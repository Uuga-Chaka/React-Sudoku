import { TCell } from "../Sudoku.types";

export type CellProps = {
  cellSelected: TCell;
  onPress: (_x: number, _y: number) => void;
  posX: number;
  posY: number;
  value: number;
  initialBoard: number[][];
};
