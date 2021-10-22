# merge sort algorithm in python
#https://www.geeksforgeeks.org/merge-sort/ ---> Article on geeks for geeks explaining the algorithm
#https://media.geeksforgeeks.org/wp-content/cdn-uploads/Merge-Sort-Tutorial.png ---> Visualization of the algorithm

def mergesort(arr):
    if len(arr) > 1:
        mid = len(arr)//2
        left = arr[:mid]
        right = arr[mid:]

        mergesort(left) #sort left half
        mergesort(right) #sort right half

        i = j = k = 0

        #merge the left and right half
        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                arr[k] = left[i]
                i += 1
            else:
                arr[k] = right[j]
                j += 1
            k += 1

        #check if any elements are left in the left array
        while i < len(left):
            arr[k] = left[i]
            i += 1
            k += 1

        #check if any elements are left in the right array
        while j < len(right):
            arr[k] = right[j]
            j += 1
            k += 1
