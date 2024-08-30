import { useContext } from "react";
import { SudokuContext } from "./SudokuContext";

export const useSudokuContext = () => {
  const { board, handleBoard, handleCellSelected, cellSelected } =
    useContext(SudokuContext);
  return { board, handleBoard, handleCellSelected, cellSelected };
};
