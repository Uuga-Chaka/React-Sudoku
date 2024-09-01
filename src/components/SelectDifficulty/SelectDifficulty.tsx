import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { apiUrl } from "../../contants";

type IResponse = {
  option: string;
  value: string;
};
const getDifficulties = async (): Promise<IResponse[]> => {
  const res = await fetch(apiUrl + "difficulties");
  return await res.json();
};
export default function SelectDifficulty() {
  const [difficultySelected, setDifficultySelected] = useState<
    string | undefined
  >();
  const { isPending, error, data } = useQuery<IResponse[]>({
    queryKey: ["sudokuDifficulty"],
    queryFn: getDifficulties,
  });

  useEffect(() => {}, [difficultySelected]);

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <div style={{ marginBottom: "10px" }}>
      {data.map((e) => (
        <button
          style={{ margin: "" }}
          onClick={() => setDifficultySelected(e.value)}
        >
          {e.option}
        </button>
      ))}
    </div>
  );
}
