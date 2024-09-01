import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import styles from "./App.module.css";
import { NumberSelector } from "./components/NumberSelector/NumberSelector";
import SelectDifficulty from "./components/SelectDifficulty/SelectDifficulty";
import Sudoku from "./components/Sudoku/Sudoku";
import { useSudokuContext } from "./components/Sudoku/useSudokuContext";
import { apiUrl } from "./contants";

type IResponse = {
  solved: number[][];
  unsolved: number[][];
};

const getSudoku = async (): Promise<IResponse> => {
  const res = await fetch(apiUrl + "sudoku/EXPERT");
  return await res.json();
};

function App() {
  const { setInitialBoard } = useSudokuContext();
  const { isPending, error, data, isFetching } = useQuery<IResponse>({
    queryKey: ["sudokuData"],
    queryFn: getSudoku,
  });
  useEffect(() => {
    if (data) setInitialBoard(data.unsolved);
  }, [data, setInitialBoard]);

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className={styles.appContainer}>
      <SelectDifficulty />
      <Sudoku data={data} />
      <div>{isFetching ? "Updating..." : ""}</div>
      <NumberSelector />
    </div>
  );
}

export default App;
