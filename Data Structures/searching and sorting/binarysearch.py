def binarySearch(target, sortedLyst):
    left = 0  # make the first position as left
    right = len(sortedLyst) - 1  # make the last item in the list as right
    while left <= right:  # we have to make sure we stop once we left and right meet
        # find the middle number note integer divistion
        midpoint = (left + right) // 2
        if target == sortedLyst[midpoint]:  # if the number is found return
            return midpoint
        # else if the target number is less than the middle number then
        elif target < sortedLyst[midpoint]:
            right = midpoint - 1  # make the middle number as right end of the region meaning we throw away the right side of the middle number
        else:
            # if the target number is greater than the middle number then, make the middle number as left.
            left = midpoint + 1
            # meaning we throw away the left side of the middle number.
    return -1


list1 = [12, 15, 16, 18, 23, 26, 29, 30, 35, 38, 46, 49, 51, 55, 99, 100, 201]
whereis = binarySearch(23, list1)
print("The position of ", 23, " in the list ", list1, " is ", whereis)


def binarySearch(target, sortedLyst):  # Revised edition
    left = 0 #Get a left pointer
    right = len(sortedLyst) - 1 #Get a right pointer
    while left <= right: #loop through until left equals right
        mid = (left + right) // 2 #find the mid of the sorted list or array
        if (target == sortedLyst[mid]): #check if mid equals the target
            return mid #if the mid equals the target return the mid 
        elif (target < sortedLyst[mid]): #check if the mid is less than the target
            right = mid - 1 #if mid is less target adjust the right pointer
        elif (target > sortedLyst[mid]):#check if mid is greater than the target 
            left = mid + 1 #if mid is greater than the target adjust left pointer 
    return -1 #if after every iteration, value was not found return -1 to show that.
