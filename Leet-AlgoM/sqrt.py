from typing import List

'''
 0 1 2 3 4
[1,3,6,8,9]

[]

mid = 0 + 4 / 2 = 2
mid = 2

target = 3

'''

def binary_search(arr: List, target: int) -> int:
    left = 0
    right = len(arr) - 1

    while (left <= right): 
        mid = (left + right) // 2
        if arr[mid] == target: 
            return mid
        if arr[mid] < target: 
            left = mid + 1
        else: 
            right = mid - 1

# n --> 16 
'''
left = 1
right = 16

mid = (16 + 1) / 2
mid = 8
res = -1

8 * 8 = 64

64 * 64 == 16 ---> no

64 * 64 > N --> YES
res = 8
right = 8 - 1
right = 7
left = 1

7 + 1 / 2

8 / 2 = 4

9 + 1 / 2 = 10 / 2 = 5

res = 5
right = 4
left = 1

'''
