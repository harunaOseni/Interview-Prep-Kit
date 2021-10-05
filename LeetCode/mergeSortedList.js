//MERGE TWO SORTED LIST

// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.


// Example 1:


// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both l1 and l2 are sorted in non-decreasing order.
var mergeSortedList = function(list1, list2){
    //Always some base case ALWAYSSSS FKN LTCODE!!!!!
    if (!list1){
        return list2;
    }
    if(list2){
        return list1;
    }

    let list1Value = list1.val; 
    let list2Value = list2.val; 
    let mergedList; 

    if (list1Value < list2Value){
    mergedList = new TreeNode(list1Value); 
    mergedList.next = mergeSortedList(list1.next, list2)
    } else{
        mergedList = new TreeNode(list2Value);
        mergedList.next
    }
    return mergedList;
}

//....This is me just rewritten the code dont mind the bullshit
var mergeSortedList = function(list1, list2){
    //we need a mergeList available to the masses
    let mergedListToMassesConosseuier;
    //Always some fucking base case with leetcode problems
    if(!list1){
        return list2;
    }

    if(!list2){
        return list1;
    }
    if(list1.val < list2.val){
        mergedListToMassesConosseuier = new TreeNode(list1.val); 
        mergedListToMassesConosseuier.next(list1.next, list2.next);
    }else{
        mergedListToMassesConosseuier = new TreeNode(list2);
        mergedListToMassesConosseuier.next(list2.next, list1);
    
    }

    return mergedListToMassesConosseuier;
}