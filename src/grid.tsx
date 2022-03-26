import { FC } from "react";
import { Cell } from './cell';
import { cellPropsType } from "./types";
import useGrid from "./useGrid"
import {
  ROWS_COUNT,
  COLS_COUNT,
} from "./constants";

export const Grid:FC = () => {  
  const {grid, reset, toggle, running} = useGrid(ROWS_COUNT, COLS_COUNT);

  const handleClick = () => {
    toggle();
  };

  const renderGrid = () => {
    return grid.map((row, rowIndex) => {
      return row.map((col, colIndex) => {
        const cellProps = {
          grid,
          rowIndex: rowIndex,
          colIndex: colIndex,
        }
        return <Cell key={`${rowIndex}-${colIndex}`} {...cellProps} />
      })
    })
  }


  return (
    <>
      <div className="main">
        <div>
          <div className='board'>
            {renderGrid()}
          </div>          
        </div>
        
        <div className="right">
          <h1>Game Of Life</h1>
          <button onClick={handleClick}>
            {running ? "Stop" : "Start"}
          </button>
          <button onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  )
};