import { useQuery } from "@tanstack/react-query";
import styles from "./App.module.css";
import { NumberSelector } from "./components/Sudoku/NumberSelector/NumberSelector";
import Sudoku from "./components/Sudoku/Sudoku";
import { apiUrl } from "./contants";

type IResponse = {
  solved: number[][];
  unsolved: number[][];
};

const getSudoku = async (): Promise<IResponse> => {
  const res = await fetch(apiUrl + "sudoku");
  return await res.json();
};

function App() {
  const { isPending, error, data, isFetching } = useQuery<IResponse>({
    queryKey: ["sudokuData"],
    queryFn: getSudoku,
  });
  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className={styles.appContainer}>
      <Sudoku data={data} />
      <div>{isFetching ? "Updating..." : ""}</div>
      <NumberSelector />
    </div>
  );
}

export default App;
