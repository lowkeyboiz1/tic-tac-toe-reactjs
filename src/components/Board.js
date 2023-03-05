import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  return (
    <div className="m-[25px] w-[500px] h-[500px] grid grid-rows-3 grid-cols-3 gap-4">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          classNameOfItem = {item === "X" ? "text-red-600" : "text-blue-600"}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
