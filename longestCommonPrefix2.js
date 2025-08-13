/**
 * Finds the longest common prefix among all strings in the array using sorting.
 * @param {string[]} strs - Array of strings to check.
 * @return {string} - The longest common prefix, or a message if the array is empty.
 */
var longestCommonPrefix = function(strs) {
    // Edge case: if the array is empty, return a message
    if (!strs.length) return "no value in array";
    
    // Sort the array in lexicographical (dictionary) order
    strs.sort();
    
    // The first and last strings will be the most different in the sorted list
    let first = strs[0];
    let last = strs[strs.length - 1];
    
    // Index to track the matching characters between first and last
    let i = 0;
    
    // Compare characters while they match and stay within the length of the first string
    while (i < first.length && first[i] === last[i]) {
        i++;
    }

    // Return the substring from 0 to i (the common prefix)
    return first.slice(0, i);
};

// Test cases
// console.log(longestCommonPrefix(["flow","flower","floating","focus"])); // "flo"
// console.log(longestCommonPrefix(["flow","flower","floating"]));         // "flo"
console.log(longestCommonPrefix([])); // "no value in array"
