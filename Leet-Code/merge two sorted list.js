// MERGE TWO SORTED LIST

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

// Solution:
// Time complexity: O(m + n)

var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  let listValue1 = list1.val;
  let listValue2 = list2.val;
  let mergeSortedList;

  if (listValue1 < listValue2) {
    mergeSortedList = new ListNode(listValue1);
    mergeSortedList.next = mergeTwoLists(list1.next, list2);
  } else {
    mergeSortedList = new ListNode(listValue2);
    mergeSortedList.next = mergeTwoLists(list2.next, list1);
  }
  return mergeSortedList;
};
