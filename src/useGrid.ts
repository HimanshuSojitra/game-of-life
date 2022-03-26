import { useState, useEffect, useCallback, useRef } from "react";
import { randomTiles, getAliveNeighborsCount } from "./utils";
import useInterval from "./useInterval";

export default function useGrid(rowNum: number, colNum: number) {
  const [grid, setGrid] = useState<number[][]>([]);
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  function reset() {
    setGrid(randomTiles(rowNum, colNum));
    setRunning(false);
  }

  function toggle() {
    setRunning(!running);
    if (!running) {
      runningRef.current = true;
    }
  }

  const runSimulation = useCallback((grid) => {
    if (!runningRef.current) {
      return;
    }
    
    const gridCopy = getAliveNeighborsCount(rowNum, colNum, grid);
    setGrid(gridCopy);
  }, []);

  useEffect(
    () => {
      reset();
    },
    [rowNum, colNum]
  );

  useInterval(() => {
    runSimulation(grid);
  }, 400);

  return { grid, reset, toggle, running };
}
