import { useSudokuContext } from "../hooks/useSudokuContext";
import { Cell } from "./Cell/Cell";
import styles from "./Sudoku.module.css";

type IResponse = {
  solved: number[][];
  unsolved: number[][];
};

export default function Sudoku({ data }: { data: IResponse }) {
  const { cellSelected, handleCellSelected, board } = useSudokuContext();

  return (
    <div className={styles.container} role="grid" aria-label="Sudoku Board">
      {board.map((row, x) =>
        row.map((cell, y) => (
          <Cell
            key={"cell-" + x + y}
            value={cell}
            posX={x}
            posY={y}
            onPress={handleCellSelected}
            cellSelected={cellSelected}
            initialBoard={data.unsolved}
          />
        ))
      )}
    </div>
  );
}
