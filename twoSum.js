/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// the 2 for loops are inefficient. There is  the other hash map way described below

// var twoSum = function (nums, target) {
// let sol=[] //define an array
//     for(let i=0;i<nums.length;i++){ //the the first loop
//         for(let j=i+1;j<nums.length;j++){ //run the 2nd loop from i+1

//             if((nums[i]+nums[j])===target){ //check if the sun of 2 numbers is equal to target
//                 sol.push(i,j) //if so, push the index to the sol array
//                 return sol //retun the array
//             }           
//         }
//     }
    
// };

//this is the more efficient hasmap way to solve this problem

var res= function twoSum(nums, target) {
    let map = {}; //define a map. this will store the result index value

    for (let i = 0; i < nums.length; i++) {  //Loops through each element in the nums array.
        let complement = target - nums[i]; //calculates the number needed to reach the target.

        if (map.hasOwnProperty(complement)) { //Checks if we have already seen the complement in the array.
            console.log("map value is " + map[complement] + ", current index is " + i);
            return [map[complement], i];
        }

        map[nums[i]] = i; //If the complement was not found yet, Save the current number and its index into the map for future lookup.
        console.log("map i is "+ i)
        console.log("final map is "+ map)
    }
};

let nums = [2, 7, 11, 15, 27, 34];
let target = 26;

let result = res(nums, target);
console.log(result);