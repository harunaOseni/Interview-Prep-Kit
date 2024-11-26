function findAllAnagrams(original, check) {
    // Result array to store the starting indices of all anagrams
    const result = [];

    // Edge case: If the `check` string is longer than `original`, return an empty array
    if (check.length > original.length) return result;

    // Step 1: Create frequency arrays for `check` and a sliding window in `original`
    const checkFreq = new Array(26).fill(0); // Stores character frequencies for `check`
    const windowFreq = new Array(26).fill(0); // Tracks character frequencies for the current window in `original`

    // Helper function: Convert a character to its corresponding index (0 for 'a', 1 for 'b', ..., 25 for 'z')
    const charToIndex = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);
    // Example: 'a'.charCodeAt(0) = 97, 'z'.charCodeAt(0) = 122, so 'a' maps to 0, 'z' maps to 25.

    // Populate the frequency array for the `check` string
    for (let char of check) {
        checkFreq[charToIndex(char)]++; // Increment frequency for each character in `check`
    }


    // Step 2: Initialize the first window in `original`
    for (let i = 0; i < check.length; i++) {
        windowFreq[charToIndex(original[i])]++; // Increment frequency for characters in the first window
    }

    // Step 3: Compare the first window to `check` and add index if it matches
    if (checkFreq.join() === windowFreq.join()) {
        result.push(0); // If the first window is an anagram, add index 0
    }

    // Step 4: Slide the window across the rest of the `original` string
    for (let i = check.length; i < original.length; i++) {
        // Add the character entering the window
        windowFreq[charToIndex(original[i])]++;

        // Remove the character leaving the window
        windowFreq[charToIndex(original[i - check.length])]--;

        // Compare the frequency maps of `check` and the current window
        if (checkFreq.join() === windowFreq.join()) {
            result.push(i - check.length + 1); // Add the starting index of the current anagram
        }
    }

    // Return the result array containing all starting indices of anagrams
    return result;
}

// Example Usage
const original = "cbaebabacd";
const check = "abc";
console.log(findAllAnagrams(original, check)); // Output: [0, 6]
