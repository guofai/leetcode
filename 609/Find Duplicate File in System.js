/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
	var files = {};
    for (var i = 0; i < paths.length; i++) {
    	var file = paths[i].split(' ');
    	for (var j = 1; j < file.length; j++) {
    		var current_file = file[j].split('(');
    		var tmp = (files[current_file[1]] || []);
    		tmp.push(file[0]+'/'+current_file[0]);
    		files[current_file[1]] = tmp;
    	}
    }
    var result = [];
    for (var key in files) {
    	if (files[key].length>1) {
    	    result.push(files[key]);
    	}
    }
    return result;
};

var findDuplicate = function(paths) {
    let fileContentAndPaths = new Map();
    let ret = [];
    for(let i = 0; i < paths.length; i++) { 
        let pathsArr = paths[i].split(' ');
        for(let j = 1; j < pathsArr.length; j++) {
            let fileAndContent = pathsArr[j];
            let indexOfParen = fileAndContent.indexOf('(');
            let file = fileAndContent.substring(0, indexOfParen);
            let content = fileAndContent.substring(indexOfParen + 1, fileAndContent.indexOf(')')); 
            let path = pathsArr[0] + "/" + file; 
            //console.log("file : " + file);
            //console.log("path : " + path);
            //console.log("content : " + content);
            if(fileContentAndPaths.has(content)) {
                let files = fileContentAndPaths.get(content);
                files.push(path);
                fileContentAndPaths.set(content, files); 
            } else {
                fileContentAndPaths.set(content, [path]);
            }
        } 
    }
    fileContentAndPaths.forEach((value, key, map) => {
        if(value.length > 1) 
            ret.push(value);
    });
    return ret;
};
