from node import Node

class Stack:
    def __init__(self):
        self.top = Node('Empty',None) # Create a node with no data and no next node
    def push(self,item): # Push an item onto the stack
        topItem = self.top # Create a temporary node to hold the top item
        item.next = topItem # Set the next node of the item to the top item
        self.top = item # Set the top item to the item
    def pop(self):
        topItem = self.top # Create a temporary node to hold the top item
        self.top = topItem.next # Set the top item to the next item
        return topItem

#Create a Stack

stack = Stack()
# Add 3 items to the Stack
item = Node('Raj')
stack.push(item)
item = Node('Zed')
stack.push(item)
item = Node('Joanna')
stack.push(item)
#Remove 3 items from Stack
item = stack.pop()
print(item.data)
item = stack.pop()
print(item.data)
item = stack.pop()
print(item.data)
item = stack.pop()
print(item.data)
#result will be: Joanna, Zed, Raj