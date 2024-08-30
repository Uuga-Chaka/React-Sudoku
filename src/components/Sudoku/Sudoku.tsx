import { Cell } from "./Cell/Cell";
import styles from "./Sudoku.module.css";
import { useSudokuContext } from "./useSudokuContext";

type IResponse = {
  solved: number[][];
  unsolved: number[][];
};

export default function Sudoku({ data }: { data: IResponse }) {
  const { cellSelected, handleCellSelected } = useSudokuContext();

  return (
    <div className={styles.container} role="grid" aria-label="Sudoku Board">
      {data.unsolved.map((row, x) =>
        row.map((cell, y) => (
          <Cell
            key={x + y + "-cell"}
            value={cell}
            posX={x}
            posY={y}
            onPress={handleCellSelected}
            cellSelected={cellSelected}
          />
        ))
      )}
    </div>
  );
}
