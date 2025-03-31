var NeighborSum = function(grid) {
    this.grid = grid;
    this.rows = grid.length;
    this.cols = grid[0].length;
};

/** 
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.adjacentSum = function(value) {
    let sum = 0;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // Up, Down, Left, Right

    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
            if (this.grid[i][j] === value) {
                for (const [dx, dy] of directions) {
                    let ni = i + dx, nj = j + dy;
                    if (ni >= 0 && ni < this.rows && nj >= 0 && nj < this.cols) {
                        sum += this.grid[ni][nj];
                    }
                }
            }
        }
    }

    return sum;
};

/** 
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.diagonalSum = function(value) {
    let sum = 0;
    const diagonals = [[-1, -1], [-1, 1], [1, -1], [1, 1]]; 

    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
            if (this.grid[i][j] === value) {
                for (const [dx, dy] of diagonals) {
                    let ni = i + dx, nj = j + dy;
                    if (ni >= 0 && ni < this.rows && nj >= 0 && nj < this.cols) {
                        sum += this.grid[ni][nj];
                    }
                }
            }
        }
    }

    return sum;
};

