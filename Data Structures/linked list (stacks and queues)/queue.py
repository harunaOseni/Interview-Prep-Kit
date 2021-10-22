from node import Node
#check out real time visualization of a queue while you read the code here
#---> https://courses.cs.washington.edu/courses/cse373/16wi/Hashing/visualization/QueueLL.html

class Queue:
    def __init__(self):
        self.top = Node('Empty',None)
        self.last = self.top
        
    def add(self,item):
        if self.top == None:
            self.top.next = item
        self.last.next = item
        self.last = item

    def remove(self):
        topItem = self.top
        self.top = topItem.next
        return topItem

#Create Queue
queue = Queue()
#Create Item and Add to Queue
item = Node('Raj')
queue.add(item)
item = Node('Zed')
queue.add(item)
item = Node('Joanna')
queue.add(item)
# Remove item from Queue
item = queue.remove()
print(item.data)
item = queue.remove()
print(item.data)
item = queue.remove()
print(item.data)
item = queue.remove()
print(item.data)