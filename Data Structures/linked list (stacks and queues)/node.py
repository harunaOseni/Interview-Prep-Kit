"""
File: node.py

Node classes for one-way linked structures and two-way
linked structures.
"""

class Node(object): #node of a single linked list

    def __init__(self, data, next = None):
        """Instantiates a Node with default next of None"""
        self.data = data # Data Part
        self.next = next # Link to the next item in the list

class DNode(): #node of a double linked list
    def __init__(self,data,next=None,previous=None):
        self.data = data # Data part
        self.next = next # Link to the next node
        self.previous = previous # link to the previous node.
        
