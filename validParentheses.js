/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack=[] //deinfe a stack to store the closing parenthesis
    const map={ //define a make with opening brackets as key and closing as value
        '(':')',
        '{':'}',
        '[':']'
    }

    for(let char of s){ //run a loop for all chars in String s passed in the function

        if (map[char]) stack.push(map[char]) //if char =map's key (opening bracket), push closing bracket to stack
            else if(stack.pop()!==char) return false 
            //if char !=map's key (opening bracket), pop out the top most char in stack. return false if the char is not equal to stack's top most value
    }
    return stack.length === 0; //if stack is empty, then the string is valid, return true, else retun false
};

let paran=isValid('{[()]}')
console.log(paran)