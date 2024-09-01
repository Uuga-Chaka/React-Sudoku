import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apiUrl } from "../../contants";
import { useSudokuContext } from "../hooks/useSudokuContext";

import { useState } from "react";
import style from "./SelectDifficulty.module.css";

//TODO: move to models file
type IResponse = {
  option: string;
  value: string;
};

type IResponsee = {
  solved: number[][];
  unsolved: number[][];
};

const getDifficulties = async (): Promise<IResponse[]> => {
  const res = await fetch(apiUrl + "difficulties");
  return await res.json();
};

export default function SelectDifficulty() {
  const queryClient = useQueryClient();
  const { setInitialBoard, resetSudoku } = useSudokuContext();
  const [difficultySelected, setDifficultySelected] = useState<string>();

  const { isPending, error, data } = useQuery<IResponse[]>({
    queryKey: ["sudokuDifficulty"],
    queryFn: getDifficulties,
  });

  const handleClick = async (diff: string) => {
    const data = await queryClient.fetchQuery({
      queryKey: ["sudokuData"],
      queryFn: async (): Promise<IResponsee> => {
        const res = await fetch(apiUrl + `sudoku/${diff}`);
        return await res.json();
      },
    });
    setDifficultySelected(diff);
    setInitialBoard(data.unsolved);
    resetSudoku();
  };

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <div className={style.container}>
      {data.map((e) => (
        <button
          className={`${style.text} ${
            e.value == difficultySelected && style.selected
          }`}
          onClick={() => handleClick(e.value)}
        >
          {e.option}
        </button>
      ))}
    </div>
  );
}
