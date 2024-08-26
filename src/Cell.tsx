import { CSSProperties } from "react";

type StyleTypes = {
  [key: string]: CSSProperties;
};

const style: StyleTypes = {
  container: {
    height: 50,
    width: 50,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
  },
};

export const Cell = ({ cell }: { cell: number }) => {
  return <div style={style.container}>{cell !== 0 && cell}</div>;
};
