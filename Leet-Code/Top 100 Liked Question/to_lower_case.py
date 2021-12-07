# TO LOWER CASE

# Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

# Example 1:

# Input: s = "Hello"
# Output: "hello"
# Example 2:

# Input: s = "here"
# Output: "here"
# Example 3:

# Input: s = "LOVELY"
# Output: "lovely"

# Constraints:

# 1 <= s.length <= 100
# s consists of printable ASCII characters.

class Solution(object):
    def toLowerCase(self, s):
        """
        :type s: str
        :rtype: str
        """
        # return s.lower()
        hash_table = {
            "A": "a",
            "B": "b",
            "C": "c",
            "D": "d",
            "E": "e",
            "F": "f",
            "G": "g",
            "H": "h",
            "I": "i",
            "J": "j",
            "K": "k",
            "L": "l",
            "M": "m",
            "N": "n",
            "O": "o",
            "P": "p",
            "Q": "q",
            "R": "r",
            "S": "s",
            "T": "t",
            "U": "u",
            "V": "v",
            "W": "w",
            "X": "x",
            "Y": "y",
            "Z": "z"
        }
        result = ""

        for i in range(len(s)):
            if hash_table.get(s[i]):
                result += hash_table.get(s[i])
            else:
                result += s[i]

        return result