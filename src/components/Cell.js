import React from "react";

const Cell = ({ onClick, value, classNameOfItem }) => {
  return (
    <div
      className={`${classNameOfItem} shadow-md cursor-pointer text-[100px] font-bold flex items-center justify-center`}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default Cell;
