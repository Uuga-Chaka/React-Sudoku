import { useSudokuContext } from "../Sudoku/useSudokuContext";
import styles from "./NumberSelector.module.css";

export const NumberSelector = () => {
  const numbers = Array.from({ length: 9 }, (_, i) => i + 1);

  const { cellValue, handleBoard } = useSudokuContext();

  return (
    <div
      className={styles.container}
      role="group"
      aria-label="Sudoku Number Selector"
    >
      <button
        key="remove"
        className={`${styles.number} ${!cellValue && styles.selected}`}
        aria-label={`Select number 0`}
        aria-pressed="false"
        onClick={() => handleBoard(0)}
      >
        x
      </button>
      {numbers.map((num) => (
        <button
          key={num}
          className={`${styles.number} ${cellValue === num && styles.selected}`}
          aria-label={`Select number ${num}`}
          aria-pressed="false"
          onClick={() => handleBoard(num)}
        >
          {num}
        </button>
      ))}
    </div>
  );
};
