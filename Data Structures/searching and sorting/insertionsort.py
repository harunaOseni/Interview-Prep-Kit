# Pseudocode:
# --A video representation of insertion sort in action from youtube (https://youtu.be/OGzPmgsI-pQ)
# 1. Start with the first element in the list
# 2. Compare the first element with the second element
# 3. If the first element is greater than the second element, swap the two elements
# 4. Repeat steps 2 and 3 for the rest of the list
# 5. return the sorted list

# Insertion sort algorithm in python
def insertion_sort(list):
    for i in range(1, len(list)):
        j = i
        while j > 0 and list[j] < list[j-1]:
            list[j], list[j-1] = list[j-1], list[j]
            j -= 1
    return list
