import React, { FC } from "react";
import { cellPropsType } from "./types";

export const Cell: FC<cellPropsType> = (props) => {
  const {
    grid, 
    rowIndex, 
    colIndex,
  } = props;
  const isAliveCell = grid[rowIndex][colIndex] === 1 ? true : false;

  return (
    <div className={`cell ${isAliveCell ? 'cell--alive' : 'cell--dead'}`} />
  );
};