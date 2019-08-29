import React from 'react'
import { Square } from './Game';

export interface SquareProps {
  value: Square
  onClick: () => any
}

export default function Square(props: SquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
