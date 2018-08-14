/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
	var x=[],y=[];
	var fu = 0;
	for (var i = grid.length - 1; i >= 0; i--) {
		x.unshift(Math.max(...grid[i]));
		for (var j = 0; j < grid[i].length; j++) {
			fu += grid[i][j]==0?0:1;
		};
	}
	var newArray = grid[0].map(function(col, i) {
        return grid.map(function(row) {
            return row[i];
        })
    });
	for (var i = newArray.length - 1; i >= 0; i--) {
		y.unshift(Math.max(...newArray[i]));
	}
	var sum = function (arr) {
    	return arr.reduce(function(prev, curr, idx, arr){
        	return prev + curr;
    	});
	}
    return sum(x)+sum(y)+fu;
};
console.log(projectionArea([[1,2],[3,4]]));


//他这种方法，是不是只能处理正方形的数组？ 数组直接访问时未定义的内容是可以的，会返回undefined。。。
var projectionArea = function(grid) {
    let result = 0;
    let biggestOnRow = 0;
    let biggestOnColumn = 0;
    for(let i = 0 ; i<grid.length ; i++) {
        
        biggestOnRow = 0;
        biggestOnColumn = 0;
        for(let j = 0; j<grid.length; j++) {
            
            if(grid[i][j]) {
                result ++;
            }
            if(grid[i][j] > biggestOnRow) {
                biggestOnRow = grid[i][j];
            }
            if(grid[j][i] > biggestOnColumn) {
                biggestOnColumn = grid[j][i];
            }
            if(j === grid.length -1) {
                result += biggestOnRow;
                result += biggestOnColumn;
            }
        }
    }
    return result;
};

console.log(projectionArea([[1,2],[3,4],[5,6],[7,8]]));