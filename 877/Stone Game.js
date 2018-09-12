/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    var turn = 'Alex';
    var Alex = Lee = 0;
    while (piles&&piles.length>0){
    	if (turn == 'Alex') {
    		Alex += piles[0]>piles[piles.length-1]?piles.shift():piles.pop();
    		turn = 'Lee';
    	}else{
    		Lee += piles[0]>piles[piles.length-1]?piles.shift():piles.pop();
    		turn = 'Alex';
    	}
    	console.log(Alex,Lee);
    }
    return Alex>Lee;
};


/**
 * @param {number[]} piles
 * @return {boolean}
 */
// var stoneGame = function(piles) {
//     return true
// };

/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    let dp = piles;
    for (let d = 1; d < piles.length; d++)
        for (let i = 0; i < piles.length - d; i++)
            dp[i] = Math.max(piles[i] - dp[i + 1], piles[i + d] - dp[i]);
    return dp[0] > 0;
}

var stoneGame = function(piles) {
    const N = piles.length;
    // Make a (N+2) by (N+2) array, initialized with 0s.
    const dp = Array(N).fill(0).map(() => Array(N).fill(0));

    for (var i = 0; i < N; i++) dp[i][i] = piles[i];
    // dp[i+1][j+1] = the value of the game [piles[i], ..., piles[j]]
    for (var d = 1; d < N; d++)
            for (var i = 0; i < N - d; i++)
                dp[i][i + d] = Math.max(piles[i] - dp[i + 1][i + d], piles[i + d] - dp[i][i + d - 1]);
    console.log(dp);
    return dp[0][N-1] > 0;
    
};

console.log(stoneGame([1,2,100,4,1]));