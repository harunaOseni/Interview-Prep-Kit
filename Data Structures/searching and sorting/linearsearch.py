def sequentialSearch(target, lyst):
    """Returns the position of the target item if found,
    or -1 otherwise."""
    position = 0
    while position < len(lyst):
        if target == lyst[position]:
            return position
        position += 1
    return -1


list1 = [23,45,13,10, 56, 76, 87, 34, 52, 5, 27]
whereis = sequentialSearch(5, list1)
print("The position of ", 5, " in the list ", list1, " is ", whereis)
