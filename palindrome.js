/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    return x<0?false:x.toString()===x.toString().split("").reverse().join("")    
};
let palindrome= isPalindrome("tattarrattat")
console.log("Palindrome "+palindrome)

//EXPANATION

//x<0?false-means
// A negative number is not a palindrome because of the - sign.Example: -121 → "121-" when reversed ≠ "-121"
    
//x.toString().split("").reverse().join("") means-
//split("") → turns the string into an array of characters
//reverse() → reverses the array
//join("") → joins it back into a string


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    var orgStr=x.toString()
    let left=0
    let right=orgStr.length-1

    while(right>left){
        if(orgStr[left]!==orgStr[right]) return false
        left++
        right++
    }
    return true    
};
