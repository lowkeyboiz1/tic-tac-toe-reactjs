import React, { useState } from "react";
import { calculateWinner } from "../helpers";
import Board from "./Board";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) {
      return;
    }
    boardCopy[index] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setBoard(boardCopy);
  };
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };
  return (
    <div className="flex items-center">
      <Board cells={board} onClick={handleClick}></Board>
      <div className="flex flex-col gap-4">
        <button
          className="px-8 py-4 bg-orange-700 border rounded text-white"
          onClick={handleResetGame}
        >
          Reset Game
        </button>
        <div className={`${!xIsNext ? "text-red-600 " : "text-blue-600 "} text-[30px]`}>
          {winner ? `Winner is ${!xIsNext ? "X" : "O"}` : ""}
        </div>
      </div>
    </div>
  );
};

export default Game;
