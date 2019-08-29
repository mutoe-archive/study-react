import React from "react";

export type SquareValue = "X" | "O" | null;

export interface SquareProps {
  value?: SquareValue;
  onClick?: () => any;
}

export default function Square(props: SquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
