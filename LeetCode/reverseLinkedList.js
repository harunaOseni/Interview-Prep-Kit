// REVERSE A LINKED LIST LEETCODE CHALLENGE


// Given the head of a singly linked list, reverse the list, 
// and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

var reverseList = function(head, prev = null) {
    if(!head){
        return prev;
    }
    let nextNode  = head.next; 
    head.next = prev; 

    return reverseList(nextNode, head);
}


var reverseList = function(head){ 
    let previousNode = null;
    let nextNode = null; 
    let currentHeadNode = head; 

    while(currentHeadNode !== null){
        nextNode = currentHeadNode.next; 
        currentHeadNode.next = previousNode; 
        previous = currentHeadNode; 
        currentHeadNode = nextNode;
    }
    return previousNode;
}