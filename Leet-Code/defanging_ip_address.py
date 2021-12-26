# DEFANGING AN IP ADDRESS

# Given a valid (IPv4) IP address, return a defanged version of that IP address.

# A defanged IP address replaces every period "." with "[.]".


# Example 1:

# Input: address = "1.1.1.1"
# Output: "1[.]1[.]1[.]1"
# Example 2:

# Input: address = "255.100.50.0"
# Output: "255[.]100[.]50[.]0"

# Constraints:

# The given address is a valid IPv4 address.

# Time-Complexity -> 0(n)
# Space-Complexity -> 0(n)

class Solution(object):
    def defangIPaddr(self, address):
        """
        :type address: str
        :rtype: str
        """
        defang = [x for x in address]
        result = ""

        for index in range(len(defang)):
            if defang[index] == ".":
                defang[index] = "[.]"

        return result.join(defang)