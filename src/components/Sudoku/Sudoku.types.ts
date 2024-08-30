import { ReactNode } from "react";

export type TCell = { x: number; y: number } | undefined;
export type TContextValue = {
  board: number[][];
  handleBoard: (value: number) => void;
  handleCellSelected: (_x: number, _y: number) => void;
  cellSelected: TCell;
};

export type SudokuProviderProps = {
  children: ReactNode;
  initialBoard: number[][];
};
