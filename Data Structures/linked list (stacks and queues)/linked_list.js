// IMPLEMENTING LINKED LIST IN JS

//List node
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//Linked list class
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);

node1.next = node2;


let linkedList = new LinkedList(node1);

console.log(linkedList.head.next.data);