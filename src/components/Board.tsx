import React from "react";
import Square, { SquareValue } from "./Square";

export interface BoardProps {
  squares: SquareValue[];
  onClick: (i: number) => void;
  winnerLocation?: number[];
}

export default class Board extends React.Component<BoardProps> {
  renderSquare(i: number) {
    return (
      <Square
        key={i}
        isWin={
          this.props.winnerLocation && this.props.winnerLocation.includes(i)
        }
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const rows = [0, 1, 2].map(row => (
      <div key={row} className="board-row">
        {[0, 1, 2].map(col => this.renderSquare(row * 3 + col))}
      </div>
    ));
    return <div>{rows}</div>;
  }
}
