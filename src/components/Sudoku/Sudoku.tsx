import { Cell } from "./Cell/Cell";
import styles from "./Sudoku.module.css";
import { useSudokuContext } from "./useSudokuContext";

type IResponse = {
  solved: number[][];
  unsolved: number[][];
};

export default function Sudoku({ data }: { data: IResponse }) {
  const { cellSelected } = useSudokuContext();

  return (
    <>
      <p>{cellSelected?.x}</p>
      <p>{cellSelected?.y}</p>
      <div className={styles.container}>
        {data.unsolved.map((row, i) =>
          row.map((cell, j) => (
            <Cell key={i + j + "-cell"} value={cell} posX={i} posY={j} />
          ))
        )}
      </div>
    </>
  );
}
