# Newspapers
# You've begun working in the one and only Umbristan, and it is part of your job duty to organize newspapers. Every morning, your fellow coworkers will dilligently read through the newspapers to examine its contents. It is your job to organize the newspapers into piles and hand them out to your coworkers to read through.

# Each newspaper is marked with the time it would take to read through its contents. The newspapers are carefully laid out in a line in a particular order that must not be broken when assigning the newspapers. You cannot pick and choose newspapers randomly from the line to assign to a co-worker. Instead, you must take newspapers from a particular subsection of the line, make a pile and give that to a co-worker.

# What is the minimum amount of time it would take to have your coworkers go through all the newspapers?

# Constraints
# 1 <= newspapers_read_times.length <= 10^5

# 1 <= newspapers_read_times[i] <= 10^5

# 1 <= num_coworkers <= 10^5

# Examples
# Example 1:
# Input: newspapers_read_times = [7,2,5,10,8], num_coworkers = 2
# Output: 18
# Explanation:
# Assign first 3 newspapers to one coworker then assign the rest to another. The time it takes for the first 3 newspapers is 7 + 2 + 5 = 14 and for the last 2 is 10 + 8 = 18.

# Example 2:
# Input: newspapers_read_times = [2,3,5,7], num_coworkers = 3
# Output: 7
# Explanation:
# Assign [2, 3], [5], and [7] separately to workers. The minimum time is 7.

from typing import List


def newspapers_split(newspapers_read_times: List[int], num_coworkers: int) -> int:
    # WRITE YOUR BRILLIANT CODE HERE
    low, high = max(newspapers_read_times), sum(newspapers_read_times)
    ans = -1
    while low <= high:
        mid = (low + high) // 2
        print(feasible(newspapers_read_times, num_coworkers, mid))
        if feasible(newspapers_read_times, num_coworkers, mid):  # if mid is feasible
            ans = mid
            high = mid - 1
        else:
            low = mid + 1

    return ans


def feasible(newspapers_read_times, num_coworkers, mid):
    count = 1  # number of workers
    total = 0  # total time
    for i in newspapers_read_times:  # iterate through newspapers
        total += i  # add time to total
        if total > mid:  # if total time exceeds mid
            count += 1  # add worker
            total = i  # reset total time
    return count <= num_coworkers


# print(newspapers_split(newspapers_read_times=[
#       7, 2, 5, 10, 8], num_coworkers=2))
# print(newspapers_split(newspapers_read_times=[2, 3, 5, 7], num_coworkers=3))
