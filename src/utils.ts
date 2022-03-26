import { NEIGHBOR_POSITIONS } from "./constants";

export const randomTiles = (rowNum: number, colNum: number) => {
    return Array.from(Array(rowNum), () => {
        return Array.from(Array(colNum), populate)
    });
}

const populate = () => {
    return Math.round(Math.random());
};
  
export const getAliveNeighborsCount = (rowNum: number, colNum: number, grid: number[][]) => {
    let gridCopy = JSON.parse(JSON.stringify(grid));
    
    for (let i = 0; i < rowNum; i++) {
      for (let j = 0; j < colNum; j++) {
        let neighbors = 0;

        NEIGHBOR_POSITIONS.forEach(([x, y]) => {
          const newI = i + x;
          const newJ = j + y;

          if (newI >= 0 && newI < rowNum && newJ >= 0 && newJ < colNum) {
            neighbors += grid[newI][newJ];
          }
        });

        if (neighbors < 2 || neighbors > 3) {
          gridCopy[i][j] = 0;
        } else if (grid[i][j] === 0 && neighbors === 3) {
          gridCopy[i][j] = 1;
        }
      }
    }

    return gridCopy;
}