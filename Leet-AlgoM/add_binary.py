# Add Binary
# Given two binary strings a and b, return their sum as a binary string.


# Example 1:
# Input: a = "11", b = "1"
# Output: "100"

# Example 2:
# Input: a = "1010", b = "1011"
# Output: "10101"

# Constraints:
# 1 <= a.length, b.length <= 104
# a and b consist only of '0' or '1' characters.
# Each string does not contain leading zeros except for the zero itself.

class Solution(object):
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        carry = 0
        result = []
        i = len(a) - 1
        j = len(b) - 1

        while i >= 0 or j >= 0 or carry:
            digit_a = int(a[i]) if i >= 0 else 0
            digit_b = int(b[j]) if j >= 0 else 0

            current_sum = digit_a + digit_b + carry
            carry = current_sum // 2
            current_digit = current_sum % 2

            result.insert(0, str(current_digit))

            i -= 1
            j -= 1

        return ''.join(result)

# Rewrite for mastery #1:


class Solution(object):
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        carry = 0
        result = []
        i = len(i) - 1
        j = len(j) - 1

        while i >= 0 or j >= 0 or carry:
            digit_a = int(a[i]) if i >= 0 else 0
            digit_b = int(b[i]) if j >= 0 else 0

            current_sum = digit_a + digit_b + carry
            carry = current_sum // 2
            current_digit = current_sum % 2

            result.insert(0, str(current_digit))

            i -= 1
            j -= 1

        return ''.join(result)

# Rewrite for mastery #2:


class Solution(object):
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        carry = 0
        result = []
        i = len(i) - 1
        j = len(j) - 1

        while i >= 0 or j >= 0 or carry:
            digit_a = int(a[i]) if i >= 0 else 0
            digit_b = int(b[j]) if j >= 0 else 0

            current_sum = digit_a + digit_b + carry
            carry = current_sum // 2
            current_digit = current_sum % 2

            result.insert(0, str(current_digit))

            i -= 1
            j -= 1

        return ''.join()
