/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
	var result = 0;
    for (var i = 0; i < grid.length; i++) {
    	for (var j = 0; j < grid[i].length; j++) {
    		for (var m = 0; m < grid[i][j]; m++) {
    			var cube_surface = 6;
    			// 上
    			if (m!=grid[i][j]-1) {cube_surface--;}
    			if (m!=0) {cube_surface--;}
    			if (!!grid[i-1]&&!!grid[i-1][j]&&grid[i-1][j]>m){cube_surface--;}
    			if (!!grid[i+1]&&!!grid[i+1][j]&&grid[i+1][j]>m){cube_surface--;}
    			if (!!grid[i][j-1]&&grid[i][j-1]>m){cube_surface--;}
    			if (!!grid[i][j+1]&&grid[i][j+1]>m){cube_surface--;}
    			result+=cube_surface;
    		}
    	}
    }
    return result;
};

var surfaceArea = function(grid) {
  let surface = 0
  let rows = grid.length
  let cols = grid[0].length

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let c = grid[i][j]

      if (c === 0) {
        continue
      }

      let front = i == rows - 1 ? c : Math.max(0, c - grid[i + 1][j])
      let back = i === 0 ? c : Math.max(0, c - grid[i - 1][j])
      let left = j === 0 ? c : Math.max(0, c - grid[i][j - 1])
      let right = j === cols - 1 ? c : Math.max(0, c - grid[i][j + 1])

      surface = surface + front + back + left + right + 2
    }
  }

  return surface
}