import { createContext, useCallback, useMemo, useState } from "react";
import { SudokuProviderProps, TCell, TContextValue } from "./Sudoku.types";

const defaultValue: TContextValue = {
  board: Array.from({ length: 9 }, () => Array(9).fill(0)),
  handleBoard: () => {},
  handleCellSelected: () => {},
  cellSelected: undefined,
};

export const SudokuContext = createContext<TContextValue>(defaultValue);

export const SudokuContextProvider = ({
  children,
  initialBoard,
}: SudokuProviderProps) => {
  const [board, setBoard] = useState<number[][]>(defaultValue.board);
  const [cellSelected, setCellSelected] = useState<TCell>();

  const handleBoard = useCallback(
    (value: number) => {
      if (!cellSelected) return;
      const { x, y } = cellSelected;

      if (!initialBoard[x][y]) return;

      setBoard((board) => {
        const newBoard = [...board];
        const newRow = [...newBoard][x];
        newRow[y] = value;
        newBoard[x] = newRow;
        return newBoard;
      });
    },
    [cellSelected, initialBoard]
  );

  const handleCellSelected = useCallback(
    (_x: number, _y: number) => {
      if (initialBoard[_x][_y] !== 0) return;
      setCellSelected({ x: _x, y: _y });
    },
    [initialBoard]
  );

  const value = useMemo(
    () => ({ board, handleBoard, handleCellSelected, cellSelected }),
    [board, handleCellSelected, handleBoard, cellSelected]
  );

  return (
    <SudokuContext.Provider value={value}>{children}</SudokuContext.Provider>
  );
};
