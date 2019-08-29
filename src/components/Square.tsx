import React from "react";

export type SquareValue = "X" | "O" | null;

export interface SquareProps {
  value?: SquareValue;
  onClick?: () => any;
  isWin?: boolean;
}

export default function Square(props: SquareProps) {
  return (
    <button
      className={`square ${props.isWin ? "win" : ""}`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
