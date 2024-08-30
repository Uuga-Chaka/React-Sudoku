import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";

type TCell = { x: number; y: number } | undefined;
type TContextValue = {
  board: number[][];
  handleBoard: (value: number) => void;
  handleCellSelected: (_x: number, _y: number) => void;
  cellSelected: TCell;
};

type SudokuProviderProps = { children: ReactNode };

const defaultValue: TContextValue = {
  board: Array.from({ length: 9 }, () => Array(9).fill(0)),
  handleBoard: () => {},
  handleCellSelected: () => {},
  cellSelected: undefined,
};

export const SudokuContext = createContext<TContextValue>(defaultValue);

export const SudokuContextProvider = ({ children }: SudokuProviderProps) => {
  const [board, setBoard] = useState<number[][]>(defaultValue.board);
  const [cellSelected, setCellSelected] = useState<TCell>();

  const handleBoard = useCallback(
    (value: number) => {
      if (!cellSelected) return;

      const { x, y } = cellSelected;

      setBoard((board) => {
        const newBoard = [...board];
        const newRow = [...newBoard][x];
        newRow[y] = value;
        newBoard[x] = newRow;
        return newBoard;
      });
    },
    [cellSelected]
  );

  const handleCellSelected = useCallback((_x: number, _y: number) => {
    console.log("GO!")
    setCellSelected({ x: _x, y: _y });
  }, []);

  const value = useMemo(
    () => ({ board, handleBoard, handleCellSelected, cellSelected }),
    [board, handleCellSelected, handleBoard, cellSelected]
  );

  return (
    <SudokuContext.Provider value={value}>{children}</SudokuContext.Provider>
  );
};
