function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function dfs(root, target) {
    if (!root) return null;
    if (root.val === target) return root;
    // return non-null return value from the recursive calls
    const left = dfs(root.left, target);
    if (left != null) return left;
    const right = dfs(root.right, target);
    // at this point, we know left is null, and right could be null or non-null
    // we return right child's recursive call result directly because
    // - if it's non-null we should return it
    // - if it's null, then both left and right are null, we want to return null
    return right;
}

const twoSums = (nums, target) => {
    const map = new Map(); 

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; 

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }
}

console.log(twoSums([2, 7, 11, 15], 9)); 