import { useQuery } from "@tanstack/react-query";
import { CSSProperties } from "react";
import { apiUrl } from "./contants";
import { Row } from "./Row";

type IResponse = {
  solved: number[][];
  unsolved: number[][];
};

type StyleTypes = {
  [key: string]: CSSProperties;
};

const style: StyleTypes = {
  appContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
  container: {
    height: 100,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "100px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
};

function App() {
  const { isPending, error, data, isFetching } = useQuery<IResponse>({
    queryKey: ["sudokuData"],
    queryFn: async () => {
      const res = await fetch(apiUrl + "sudoku");
      return await res.json();
    },
  });
  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div style={style.appContainer}>
      <div style={{ ...style.column, border: "1px solid black" }}>
        {data.unsolved.map((row, i) => {
          return (
            <div key={i+'-row'} style={style.row}>
              <Row  row={row} />
            </div>
          );
        })}
        <div>{isFetching ? "Updating..." : ""}</div>
      </div>
    </div>
  );
}

export default App;
