# JEWELS AND STONES 

# You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

# Letters are case sensitive, so "a" is considered a different type of stone from "A".


# Example 1:

# Input: jewels = "aA", stones = "aAAbbbb"
# Output: 3
# Example 2:

# Input: jewels = "z", stones = "ZZ"
# Output: 0

# Constraints:

# 1 <= jewels.length, stones.length <= 50
# jewels and stones consist of only English letters.
# All the characters of jewels are unique.

class Solution(object):
    def numJewelsInStones(self, jewels, stones):
        """
        :type jewels: str
        :type stones: str
        :rtype: int
        """
        count = 0
        stone = stones.encode("utf-8")
        jewel = jewels.encode("utf-8")
        
        print(stone)
        
        hash_table = {}
        
        for i in range(len(stone)):
            checking = hash_table.get(stone[i], None)
            if checking == None:
                hash_table[stone[i]] = 1
            else: 
                hash_table[stone[i]] = hash_table[stone[i]] + 1
                
        for i in range(len(jewel)): 
            checking = hash_table.get(jewel[i], None)
            if checking != None:
                count += checking
            else: 
                pass
        
        return count