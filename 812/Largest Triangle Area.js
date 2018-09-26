/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
	var num = points.length;
	var maxArea = 0;
    for (var i = 0; i < num; i++) {
    	for (var j = 0; j < num; j++) {
    		for (var k = 0; k < num; k++) {
    			var temp = (points[i][0]*points[j][1]+points[j][0]*points[k][1]+points[k][0]*points[i][1]-points[i][0]*points[k][1]-points[j][0]*points[i][1]-points[k][0]*points[j][1])/2;
    			maxArea = temp>maxArea?temp:maxArea;
    		}
    	}
    }
    return maxArea;
};

var largestTriangleArea = function(points) {
    let ans = 0
    
    for (let i=0; i<points.length-2; i++) {
        let a = points[i];
        for (let j=i+1; j<points.length-1; j++) {
            let b = points[j];
            for (let k=j+1; k<points.length; k++) {
                let c = points[k];
                
                let area = Math.abs(
                    a[0] * (b[1]-c[1])
                    + b[0] * (c[1]-a[1])
                    + c[0] * (a[1]-b[1])
                ) / 2;
                ans = Math.max(ans, area);
            }
        }
    }
    
    return ans
};
