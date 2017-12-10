//我能怎么办，我也很绝望。
//来个二叉树生成函数把，要不一个一个设置要死了要。
//层次遍历的方式，维护一个队列 list 来管理二叉树的生成。
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
var newroot = createtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);


var trimBST = function(root, L, R) {
    if (isEmptyObject(root)) {return root;}
    if (root.val > R) {return trimBST(root.left,L,R);}
    if (root.val < L) {return trimBST(root.right,L,R);}

    root.left = trimBST(root.left,L,R);
    root.right = trimBST(root.right,L,R);
    return root;
};

var isEmptyObject = function (obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

console.log(trimBST(newroot,1,15));