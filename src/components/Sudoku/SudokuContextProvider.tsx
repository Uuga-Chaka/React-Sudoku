import { useCallback, useMemo, useState } from "react";
import {
  EMPTY_BOARD,
  SudokuProviderProps,
  TCell,
  TContextValue,
} from "./Sudoku.types";
import { SudokuContext } from "./SudokuContext";

export const SudokuContextProvider = ({ children }: SudokuProviderProps) => {
  const [board, setBoard] = useState<number[][]>(EMPTY_BOARD);
  const [initialBoard, setInitialBoard] = useState<number[][]>(EMPTY_BOARD);
  const [cellSelected, setCellSelected] = useState<TCell>();

  const handleBoard = useCallback(
    (value: number) => {
      if (!cellSelected || !initialBoard) return;
      const { x, y } = cellSelected;

      if (initialBoard[x][y]) return;

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
      if (!initialBoard) return;
      if (initialBoard[_x][_y]) return;
      setCellSelected({ x: _x, y: _y });
    },
    [initialBoard]
  );

  const resetSudoku = useCallback(() => {
    setBoard(EMPTY_BOARD);
  }, [setBoard]);

  const value = useMemo(
    (): TContextValue => ({
      board,
      handleBoard,
      handleCellSelected,
      cellSelected,
      cellValue: cellSelected && board[cellSelected.x][cellSelected.y],
      setInitialBoard,
      resetSudoku,
    }),
    [
      board,
      handleCellSelected,
      handleBoard,
      cellSelected,
      setInitialBoard,
      resetSudoku,
    ]
  );

  return (
    <SudokuContext.Provider value={value}>{children}</SudokuContext.Provider>
  );
};
