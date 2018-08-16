var largestValues = function(root) {
    var levels = [];
    visit(root, 0);

    function visit(node, h) {
        if (node == null) return;

        if (levels.length <= h) levels.push([]);
        levels[h].push(node.val);

        //搁这里递归，将第h层的数据压入levels[h]中
        visit(node.left, h+1);
        visit(node.right, h+1);
    }
    //也很简单了，把昨天那程序复制过来稍微改改咯,然后就通过了。。。
    //对每个levels[h]求最大值。
    return levels.map(function(e){
        return e.reduce(function(a,b){ return a>b?a:b; });
    });
};

