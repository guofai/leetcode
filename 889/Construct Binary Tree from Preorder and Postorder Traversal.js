/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var constructFromPrePost = function(pre, post) {
    if (pre == false) return null;
    var result = new TreeNode(pre.shift());
    post.pop();
    var place1 = pre.indexOf(post[post.length-1]);
    result.left = constructFromPrePost(pre.slice(0,place1),post.slice(0,place1));
    result.right = constructFromPrePost(pre.slice(place1,pre.length+1),post.slice(place1,post.length+1));
    return result;
};

var constructFromPrePost = function(pre, post) {
    const posMap = {}
    for(let i=0;i<post.length;i++) {
        posMap[post[i]] = i
    }
    function build(begin, end) {
        const root = new TreeNode(pre[begin])
        if (begin === end) return root
        // console.log(begin, end, root.val)
        const l = begin + 1
        const lPos = posMap[pre[l]]
        let r, hasRight
        for(let i=begin+2;i<=end;i++) {
            if (posMap[pre[i]] > lPos) {
                r = i
                hasRight = true
                break
            }
        }
        const left = build(l, hasRight ? r - 1 : end)
        const right = hasRight ? build(r, end) : null
        root.left = left
        root.right = right
        return root
    }
    return build(0, pre.length - 1)
};

pre = [4,2,1,3], post = [3,1,2,4]

console.log(constructFromPrePost(pre,post));