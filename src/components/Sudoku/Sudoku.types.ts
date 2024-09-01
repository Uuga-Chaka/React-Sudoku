import { Dispatch, ReactNode, SetStateAction } from "react";

export type TCell = { x: number; y: number } | undefined;
export type TContextValue = {
  board: number[][];
  handleBoard: (value: number) => void;
  handleCellSelected: (_x: number, _y: number) => void;
  cellSelected: TCell;
  cellValue?: number;
  setInitialBoard: Dispatch<SetStateAction<number[][]>>;
  resetSudoku: () => void;
};

export type SudokuProviderProps = {
  children: ReactNode;
};

export const EMPTY_BOARD = Array.from({ length: 9 }, () => Array(9).fill(0));

export const defaultValue: TContextValue = {
  board: EMPTY_BOARD,
  handleBoard: () => {},
  handleCellSelected: () => {},
  cellSelected: undefined,
  cellValue: undefined,
  setInitialBoard: () => {},
  resetSudoku: () => {},
};
