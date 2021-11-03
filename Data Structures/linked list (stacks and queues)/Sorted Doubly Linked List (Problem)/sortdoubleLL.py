# Engineer: Haruna Oseni
# Date: 10-22-2021
# Professor: Raj Joseph

class Node:
    def __init__(self, data=None, next=None, prev=None):
        self.data = data
        self.next = None
        self.previous = None


class DoubleLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def insert(self, data):
        new_node = Node(data, None, None)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.previous = self.tail
            self.tail.next = new_node
            self.tail = new_node


def generator(self):
    current = self.head
    while current:
        yield current.data
        current = current.next


def print_list(self):
    for Node in generator(self):
        print(Node)


doubly_linked_list = DoubleLinkedList()

check_for_duplicates = []

with open('Sorted Doubly Linked List (Assigment)\sampletext.txt') as sample_file:
    for line in sample_file:
        for word in line.split():
            if word.isalpha():
                if word.lower() not in check_for_duplicates:
                    check_for_duplicates.append(word.lower())
                    doubly_linked_list.insert(word)

print_list(doubly_linked_list)
