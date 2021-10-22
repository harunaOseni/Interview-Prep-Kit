# Doubly Linked List Stack
'''
This is stack implementation of doubly linked list
    push method adjust the top, so that the top always points to
    most recent item put on the stack. so adjust the top and it's link
    pop method adjust the top to point to the next item of top and
    return the top item.
'''

from node import DNode

class Stack:
    def __init__(self):
        self.top = None
    # This method pushes the item at the top of the stack
    def push(self,item):
        topItem = self.top # temporarily save top item to a variable
        if topItem != None:
            topItem.previous = item
        #establish next to this item points to the current top item
        item.next = topItem
        # adjust the top so that it points to the current item
        self.top = item
    # This method pops / removes the item from the top of the stack
    def pop(self):
        topItem = self.top # temporarily save the top to a variable
        # adjust the top to point to the next item in stack
        self.top = topItem.next
        # Return top item on stack
        return topItem 
    def isEmpty(self):
        if self.top == None:
            return True
        else:
            return False
#Create a Stack

stack = Stack()

#Push n number of items in the stack

stack.push(DNode('Raj'))
stack.push(DNode('Zed'))
stack.push(DNode('Joanna'))

# Just traverse or visit top, next and previsou to check if works
n1 = stack.top
print(n1.data)
n2 = n1.next
print(n2.data)
n3 = n2.previous
print(n3.data)

# pop items from the stack
n1 = stack.pop()
print(n1.data)
n2 = stack.pop()
print(n2.data)
n1 = stack.pop()
print(n1.data)
#check for empty 
if not stack.isEmpty():
    n2 = stack.pop()
    print(n2.data)
# Pushing in Data
print("Pushing data in the stack")
for data in range(10):
    n = DNode(data)
    print(n.data)
    stack.push(n)

# Poping the data from stack
#while not stack.isEmpty():
#    print(stack.pop().data)
print("Visiting the Stack from Top to bottom")
node = stack.top
print(node.data)
while node.next != None:
    node = node.next
    print(node.data)
pnode = node.previous
print("Visiting the Stack from bottom  to top")
while pnode.previous != None:
    node = node.previous
    print(node.data)