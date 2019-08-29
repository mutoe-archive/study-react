import React from "react";
import Board from "./Board";
import { calculateWinner } from "../utils";

export type Square = 'X' | 'O' | null

interface History {
  squares: Square[]
  location: number | null
}

interface GameState {
  history: History[]
  stepNumber: number,
  xIsNext: boolean
}

export default class Game extends React.Component<{}, GameState> {
  constructor(props: any) {
    super(props);

    this.state = {
      history: [{ squares: Array(9).fill(null), location: null }],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i: number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{ squares, location: i }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, index) => {
      const item = history[index];
      const desc = index
        ? `Go to move #${index} ${index % 2 ? "X" : "O"}:(${item.location! %
            3}, ${~~(item.location! / 3)})`
        : "Go to game start";
      return (
        <li key={index}>
          <button onClick={() => this.jumpTo(index)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i: number) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
