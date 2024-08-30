import styles from "./NumberSelector.module.css";

export const NumberSelector = () => {
  const numbers = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div
      className={styles.container}
      role="group"
      aria-label="Sudoku Number Selector"
    >
      {numbers.map((num) => (
        <button
          key={num}
          className={styles.number}
          aria-label={`Select number ${num}`}
          aria-pressed="false"
        >
          {num}
        </button>
      ))}
    </div>
  );
};
