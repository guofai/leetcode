/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
	var hangOn = [];
	var result = true;
    var openRoom = function(keys){
    	for (var i = 0; i < keys.length; i++) {
    		if(hangOn[keys[i]] != 1){
    			hangOn[keys[i]] = 1;
    			openRoom(rooms[keys[i]]);
    		}
    	}
    }
    openRoom(rooms[0]);
    for (var i = 1; i < rooms.length; i++) {
    	if (!hangOn[i]) result = false;
    }
    return result;
};
//var qu = [[1,3],[3,0,1],[3],[0]];
var qu = [[1],[2],[3],[]];


console.log(canVisitAllRooms(qu));

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var vistFromStartPoint = function(start, rooms, visited) {
    visited[start] = 1;
    
    for(var i = 0; i < rooms[start].length; i ++) {
        if(visited[rooms[start][i]]) {
            continue;
        }
        
        else {
            vistFromStartPoint(rooms[start][i], rooms, visited);
        }
    }
    
    return visited;
}

var canVisitAllRooms = function(rooms) {
    if(rooms.length == 1) {
        return true;
    }
    
    if(!rooms[0][0]) {
        return false;
    }
    
    var visited = new Array(rooms.length);
    visited[0] = 1;
    
    visited = vistFromStartPoint(0, rooms, visited);
    
    for(var i = 0; i < visited.length; i ++) {
        if(!visited[i]) {
            return false;
        }
    }
    
    return true;
    
};