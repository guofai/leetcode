/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var spiralMatrixIII = function(R, C, r0, c0) {
    let step = 0;
    let path = [[r0,c0]];
    let result = [];
    let f = Math.max(Math.abs(R-r0),Math.abs(C-c0),R,C);
    while(step<f*2){
    	step++;
    	path = path.concat(goSteps('E',step,r0,c0));c0+=step;
    	path = path.concat(goSteps('S',step,r0,c0));r0+=step;
    	step++;
    	path = path.concat(goSteps('W',step,r0,c0));c0-=step;
    	path = path.concat(goSteps('N',step,r0,c0));r0-=step;
    }
    for (var i = 0; i < path.length; i++) {
    	if(path[i][0]>=0&&path[i][0]<R&&path[i][1]>=0&&path[i][1]<C){
    		result.push(path[i]);
    	}
    }
    return result;
};

var goSteps = function(dir,step,y,x){
	let result = [];
	function goOneStep(E,S,W,N) {
		x = x + E - W;
		y = y + S - N;
		return [y,x];
	}
	while(step > 0){
		switch(dir){
			case 'E' : result.push(goOneStep(1,0,0,0));
			         break;
			case 'S' : result.push(goOneStep(0,1,0,0));
			         break;
			case 'W' : result.push(goOneStep(0,0,1,0));
			         break;
			default : result.push(goOneStep(0,0,0,1));
			         break;
		}
		step -=1;
	}
    return result;
}
console.log(spiralMatrixIII(3,3,2,2));

var spiralMatrixIII = function(R, C, r0, c0) {
    const hasher = (r, c) => {
        return C * r + C;
    }
    /* [l, d, r, u] */
    const shift = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    /* vec [) */
    let dir = 0, size = 1, r = r0, c = c0, step = 0; 
    const res = [];
    while (res.length < R * C) {
        for (let i =0; i < size; i += 1) {
            if (0 <= r && r < R && c < C && 0 <= c) {
                res.push([r, c]);
            }
            r += shift[dir][0];
            c += shift[dir][1];
        }
        
        step += 1;
        dir = (dir + 1) % 4;
        if (step % 2 === 0) {
            size += 1;
        }
    }
    return res;
};