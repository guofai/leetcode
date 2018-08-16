/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var createtree = function (values) {
    if (!values) return null;
    var list = [];
    var root = new TreeNode(values.shift());
    list.push(root);
    while (values.length > 0) {
        var tmp = list.shift();
        if(typeof(tmp) == "undefined") return '非法的数组';
        var i = values.shift();
        if (i !== null){
            tmp.left = new TreeNode(i);
            if (tmp.left.val) list.push(tmp.left);
        }
        i = values.shift();
        if (i !== null) {
            tmp.right = new TreeNode(i);
            if (tmp.right.val) list.push(tmp.right);
        }
    }
    return root;
}

var TreeNode = function (val) {
    this.val = val;
    this.left = this.right = null;
}
var newroot = createtree([3,9,20,null,null,15,7]);


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}



var averageOfLevels = function(root) {
    var leave = [root];
    var leave1 = [];
    var a;
    var sum = [];
    var result = [];
    while (leave.length>0 || leave1.length>0) {
        while (leave.length>0) {
            a = leave.pop();
            sum.push(a.val);
            if (a!== undefined) {
                if (a.left !== null) leave1.push(a.left);
                if (a.right !== null) leave1.push(a.right);
            }
        }
        result.push(avg(sum));
        sum = [];
        while (leave1.length>0) {
            a = leave1.pop();
            sum.push(a.val);
            if (a!== undefined){
                if (a.left !== null) leave.push(a.left);
                if (a.right !== null) leave.push(a.right);
            }
        }
        if (sum.length>0)
        result.push(avg(sum));
        sum = [];
    }
    return result;
};

function avg(arr){
    return eval(arr.join('+'))/arr.length;
}
console.log(averageOfLevels(newroot));
//这就通过了？不可思议呐。看看别人咋飘的

var averageOfLevels = function(root) {
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

    //对每个levels[h]求平均值。
    return levels.map(function(e){
        return e.reduce(function(a,b){ return a+b; })/e.length;
    });
};



var averageOfLevels = function(root) {
    /*var sumArr = [];
    var countArr = [];*/

    var countArr = [];

    var sum = function(node, level) {
        if(!node)
            return;
        if(!countArr[level])
            countArr.push({sum: 0, nodes: 0});
        countArr[level].sum += node.val;
        countArr[level].nodes++;
        sum(node.left, level+1);
        sum(node.right, level+1);
    }

    sum(root, 0);
    //根上面思路差不多，但是，在这里，用了箭头函数，sum已经累加，nodes也统计好，这里就是计算平均值，但是这么写是啥意思呢？
    var meanArr = countArr.map(count => count.sum / count.nodes);
    return meanArr;
};