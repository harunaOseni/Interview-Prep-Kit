# Bubblesort algorithm in python
# --A video representation of bubble sort in action from youtube (https://youtu.be/nmhjrI-aW5o)

# Pseudocode:
# 1. Start with the first element in the list
# 2. Compare the first element with the second element
# 3. If the first element is greater than the second element, swap the two elements
# 4. Repeat steps 2 and 3 for the rest of the list
# 5. return the sorted list

# Bubblesort algorithm in python
def bubblesort(list):
    for i in range(len(list)):
        for j in range(len(list)-1-i):
            print(j)
            if list[j] > list[j+1]:
                list[j], list[j+1] = list[j+1], list[j]
    return list


bubblesort([5, 3, 8, 6, 7, 2]) #---> Binary sort has been mastered
