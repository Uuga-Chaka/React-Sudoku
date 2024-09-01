import { useContext } from "react";
import { SudokuContext } from "../Sudoku/SudokuContext";

export const useSudokuContext = () => {
  const {
    board,
    handleBoard,
    handleCellSelected,
    cellSelected,
    cellValue,
    resetSudoku,
    setInitialBoard,
  } = useContext(SudokuContext);
  return {
    board,
    handleBoard,
    handleCellSelected,
    cellSelected,
    cellValue,
    resetSudoku,
    setInitialBoard,
  };
};
