/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

function numIslands(grid: string[][]): number {
  let count: number = 0;

  if (grid.length === 0) {
    return count;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        markLandZero(grid, i, j);
        count++;
      }
    }
  }

  return count;

  function markLandZero(grid: string[][], i: number, j: number) {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] === "0"
    ) {
      return;
    }

    grid[i][j] = "0";
    markLandZero(grid, i, j + 1);
    markLandZero(grid, i, j - 1);
    markLandZero(grid, i + 1, j);
    markLandZero(grid, i - 1, j);
  }
}

let grid: string[][] = [];

console.log(numIslands(grid)); // 0

grid = [];
grid[0] = ["1", "1", "1", "1", "1", "1", "1"];
grid[1] = ["0", "0", "0", "0", "0", "0", "1"];
grid[2] = ["1", "1", "1", "1", "1", "0", "1"];
grid[3] = ["1", "0", "0", "0", "1", "0", "1"];
grid[4] = ["1", "0", "1", "0", "1", "0", "1"];
grid[5] = ["1", "0", "1", "1", "1", "0", "1"];
grid[6] = ["1", "1", "1", "1", "1", "1", "1"];
console.log(numIslands(grid)); // 1

grid = [];
grid[0] = ["1", "0", "1", "1", "1"];
grid[1] = ["1", "0", "1", "0", "1"];
grid[2] = ["1", "1", "1", "0", "1"];
console.log(numIslands(grid)); // 1

grid = [];
grid[0] = ["1", "1", "1", "1", "0"];
grid[1] = ["1", "1", "0", "1", "0"];
grid[2] = ["1", "1", "0", "0", "0"];
grid[3] = ["0", "0", "0", "0", "0"];
console.log(numIslands(grid)); // 1

grid = [];
grid[0] = ["1", "1", "0", "0", "0"];
grid[1] = ["1", "1", "0", "0", "0"];
grid[2] = ["0", "0", "1", "0", "0"];
grid[3] = ["0", "0", "0", "1", "1"];
console.log(numIslands(grid)); // 3
