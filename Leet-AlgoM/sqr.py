# Square Root Estimation
# Prereq: First True in a Sorted Boolean Array

# Given an integer, find its square root without using the built-in square root function. Only return the integer part (truncate the decimals).

# Input: 16

# Output: 4

# Input: 8

# Output: 2

# Explanation: square root of 8 is 2.83..., return the integer part, 2

# Try it yourself

def square_root(n: int) -> int:
    # WRITE YOUR BRILLIANT CODE HERE
    left = 0
    right = n
    res = -1

    while left <= right:
        mid = (left + right) // 2
        if mid * mid == n:
            return mid
        if mid * mid > n:
            right = mid - 1
            res = mid
        else:
            left = mid + 1

    return res - 1
