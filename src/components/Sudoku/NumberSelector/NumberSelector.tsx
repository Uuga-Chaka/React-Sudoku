import styles from "./NumberSelector.module.css";

export const NumberSelector = () => {
  const numbers = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div className={styles.container}>
      {numbers.map((num) => (
        <div key={num} className={styles.number}>
          {num}
        </div>
      ))}
    </div>
  );
};
