/**
 * @param {number[]} nums
 * @return {number}
 */
// Function to remove duplicates from a sorted array in-place
var removeDuplicates = function(nums) {
    let i = 0; // Pointer to track position of unique elements

    // Loop through the array starting from index 1
    for (let j = 1; j < nums.length; j++) {
        // If the current element is different from the last unique element
        if (nums[j] !== nums[i]) {
            i++; // Move to the next unique position
            nums[i] = nums[j]; // Copy the unique element to its correct position
        }
    }

    // Trim the array to only include the unique elements
    nums.length = i + 1;

    // Output the result
    console.log("Output: ", nums);
};

// Test the function with a sorted array containing duplicates
let nums = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9];
removeDuplicates(nums); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]