import { TCell } from "../SudokuContext";

export type CellProps = {
  cellSelected: TCell;
  onPress: (_x: number, _y: number) => void;
  posX: number;
  posY: number;
  value: number;
};
