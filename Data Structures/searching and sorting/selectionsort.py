# Selection sort algorithm in python

# --A video representation of selection sort in action from youtube (https://youtu.be/xWBP4lzkoyM)
# Pseudocode:
# 1. Start with the first element in the list
# 2. Find the smallest element in the list
# 3. Swap the first element with the smallest element
# 4. Repeat steps 2 and 3 for the rest of the list
# 5. return the sorted list


# Selection sort algorithm in python
def selection_sort(list):
    for i in range(len(list)):  # picks an element from the list
        min_index = i  # sets the elements as the smallest element
        for j in range(i+1, len(list)):  # loops through the list from element + 1 to end of list
            # searches for element greater than current min element--> goal is to find the smallest element
            if list[min_index] > list[j]:
                min_index = j  # set the smallest element found as the new min-index
        # swap both new min index with the original number picked from the list
        list[i], list[min_index] = list[min_index], list[i]
    return list
