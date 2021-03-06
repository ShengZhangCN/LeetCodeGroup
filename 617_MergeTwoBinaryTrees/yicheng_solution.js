function TreeNode (val){
    this.val = val;
    this.left = null;
    this.right = null;
};

TreeNode.prototype.print = function (){
    console.log(this.val);
}

var mergeTrees = (t1, t2) =>{
    if (t1 != null && t2 == null){
        return t1;
    }

    if (t1 == null && t2 != null){
        return t2;
    }

    if (t1 ==null && t2 ==null){
        return null;
    }

    var node = new TreeNode(t1.val + t2.val);
    node.left = mergeTrees(t1.left, t2.left);
    node.right = mergeTrees(t1.right, t2.right);

    return node;
};

var t1 = new TreeNode(1);
t1.left = new TreeNode(3);
t1.right = new TreeNode(2);
t1.left.left = new TreeNode(5);

var t2 = new TreeNode(2);
t2.left = new TreeNode(1);
t2.right = new TreeNode(3);
t2.left.right = new TreeNode(4);
t2.right.right = new TreeNode(7);

mergeTrees(t1, t2).print()
