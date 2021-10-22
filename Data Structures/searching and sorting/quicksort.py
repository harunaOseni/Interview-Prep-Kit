#Quick sort algorithm in python
# --A video representation of quick sort in action from youtube (https://youtu.be/kFeXwkgnQ9U)

def quicksort(arr):
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[0] 
        less = [i for i in arr[1:] if i <= pivot] 
        greater = [i for i in arr[1:] if i > pivot] 
        return quicksort(less) + [pivot] + quicksort(greater) 

print(quicksort([5,3,1,2,4]))