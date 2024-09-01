import { createContext } from "react";
import { defaultValue, TContextValue } from "./Sudoku.types";

export const SudokuContext = createContext<TContextValue>(defaultValue);
