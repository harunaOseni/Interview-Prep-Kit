// BINARY TREE INORDER TRAVERSAL

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:


// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]
// Example 4:


// Input: root = [1,2]
// Output: [2,1]
// Example 5:


// Input: root = [1,null,2]
// Output: [1,2]

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100


//Inorder Binary Sequence goes from Left ----> Node ---> Right


//iterative solution
var inorderTraversal = function(root) {
    let stack = []; 
    let resultArray = []; 
    let treeNode = root; 

    while(treeNode || stack.length > 0){
        if(treeNode){
            stack.push(treeNode); 
            treeNode = treeNode.left;
        } else {
            let node = stack.pop(); 
            resultArray.push(node.val);
            treeNode = treeNode.right;
        }
    }
    return resultArray;
}

//Recursive Solution
var inorderTraversal = function(root){
    return root ? [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)] : [];
}