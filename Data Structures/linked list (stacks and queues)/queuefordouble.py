# Doubly Linked List Queue
''' In the Queue
        Adjust the tail when adding item
        Adjust the head when removing item
'''

from node import DNode

class Queue:
    def __init__(self):
        self.head = None
        self.tail = None
    # This method adds item to the queue
    def add(self,item):
        if self.head == None: #If the queue is empty
            self.head = item
            self.tail = item
        else:
            self.tail.next = item
            # establish the link from this item to the current tail item
            item.previous = self.tail
            # change the tail to point to this item
            self.tail = item
    # This method removes the item to the queue
    def remove(self):
        item = self.head # temporarily save the head to item
        print('Removing ...',item.data)
        # adjust the head to point to the next item in Queue
        self.head = item.next
        #self.head.previous = None
        return item
    # This method checks if the queue is empty
    def isEmpty(self):
        if self.head == None:
            return True
        else:
            return False
    def __str__(self):
        node = self.head
        s = node.data
        while node.next != None:
            node = node.next
            s = s + ' --> ' + node.data
        return s
    '''
    def insert(self, item):
        #traverse to the position. determine the position by the data.
        #(first occurrence of the data is position)
        # insert the item before the position.
    def delete(self,item):
        # traverse to the position where the first occurence of the item found
        # remove the item and adjust the links so that the linked list is
        # not broken
    def getItem(self, item):
        # This is a helper method for insert and delete.
        # traverse the linked list from the top to the last
        # get the item and return it. returning the object
        # will have the links in-tact. so the insert and delete methods
        # can use the position of the returned object.
    '''
#Create a Queue

queue = Queue()


print("Queue Operations")
num = int(input("Enter any number to add to Queue, enter -999 if you are done "))
while num != -999:
    queue.add(DNode(num))
    num = int(input("Enter any number to add to Queue, enter -999 if you are done "))

numToInsert = int(input("What number you want to insert"))
queue.insert(numToInsert)
numToDelete = int(input("What number you want to delete"))
queue.delete(numToDelete)
