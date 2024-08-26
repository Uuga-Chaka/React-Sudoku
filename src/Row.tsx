import { Cell } from "./Cell";

export const Row = ({ row }: { row: number[] }) => {
  return row.map((cell, i) => <Cell key={i+'-cell'} cell={cell} />);
};
