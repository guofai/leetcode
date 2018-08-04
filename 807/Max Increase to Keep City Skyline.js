/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
	var x=[],y=[],sum=0,sum1=0;
	for (var i = grid.length - 1; i >= 0; i--) {
		x.unshift(Math.max(...grid[i]));
		sum1+=grid[i].reduce(function (partial, value){
            return partial + value;
        });
	}
	var newArray = grid[0].map(function(col, i) {
        return grid.map(function(row) {
            return row[i];
        })
    });
	for (var i = newArray.length - 1; i >= 0; i--) {
		y.unshift(Math.max(...newArray[i]));
	}
	for (var row = grid.length - 1; row >= 0; row--) {
		for (var col = grid[row].length - 1; col >= 0; col--) {
			sum+=Math.min(x[row],y[col]);
		}
	}
    return sum-sum1;
};

var grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]];
console.log(maxIncreaseKeepingSkyline(grid));


/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    var everyRowMax = []
    var everyColMax = []

    for(var i = 0;i<grid.length;i++){
        var Row = 0
        var Col = 0
        for(var j =0;j<grid[0].length;j++){
            if(grid[i][j] > Row){
                Row = grid[i][j]
            }

            if(grid[j][i] > Col){
                Col = grid[j][i]
            }
        }
        everyRowMax.push(Row)
        everyColMax.push(Col)
    }
    var sum = 0
    for(var i = 0;i<grid.length;i++){
        for(var j =0;j<grid[0].length;j++){
            var min1 = everyColMax[j] - grid[i][j]
            var min2 = everyRowMax[i] - grid[i][j]
            sum += Math.min(min1,min2)
        }
    }
    return sum

};

