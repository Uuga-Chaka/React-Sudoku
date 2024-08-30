import { Cell } from "./Cell/Cell";
import styles from "./Sudoku.module.css";

type IResponse = {
  solved: number[][];
  unsolved: number[][];
};

export default function Sudoku({ data }: { data: IResponse }) {
  return (
    <div className={styles.container}>
      {data.unsolved.map((row, i) =>
        row.map((cell, j) => (
          <Cell key={i + j + "-cell"} value={cell} posX={i} posY={j} />
        ))
      )}
    </div>
  );
}
