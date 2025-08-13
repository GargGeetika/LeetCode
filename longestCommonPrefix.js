/**
 * Finds the longest common prefix among all strings in the array.
 * @param {string[]} strs - Array of strings to check.
 * @return {string} - The longest common prefix.
 */
var longestCommonPrefix = function(strs) {
    // Assume the first string is the initial prefix
    let prefix = strs[0];
    
    // Compare the prefix with each string starting from the 2nd one
    for (let i = 1; i < strs.length; i++) {
        
        // While the current string does not start with the current prefix
        while (strs[i].indexOf(prefix) !== 0) {
            // Remove the last character from the prefix
            prefix = prefix.slice(0, -1);
        }
    }
    
    // After comparing with all strings, return the resulting prefix
    return prefix;
};

// Example usage
console.log(longestCommonPrefix(["flow","flower","floating","focus"])); // "flo"