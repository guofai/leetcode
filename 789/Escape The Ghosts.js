/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
    var ghostsDistance = [];
    for (var i = 0; i < ghosts.length; i++) {
        ghostsDistance.push(distance(ghosts[i], target));
    }
    return Math.min.apply(null, ghostsDistance)-distance([0, 0], target)>0;
};

var distance = function(position, direction) {
    return Math.abs(position[0]-direction[0])+Math.abs(position[1]-direction[1]);
};


var escapeGhosts = function(ghosts, target) {
    var stepsNeeded = Math.abs(target[0]) + Math.abs(target[1]);
    
    for(var i = 0; i < ghosts.length; i ++) {
        if(Math.abs(target[0] - ghosts[i][0]) + Math.abs(target[1] - ghosts[i][1]) <= stepsNeeded) {
            return false;
        }
    }
    
    return true;
};