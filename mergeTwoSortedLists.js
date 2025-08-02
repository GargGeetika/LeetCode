/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    let i=0,j=0
    const output=[] //store output

    while(i<=list1.length && j<=list2.length){ //run the loop till both lists are run till end
        if(list1[i]<=list2[j]){ //if list 1 has a smaller number
            output.push(list1[i++]) //push it to output
        }else{
            output.push(list2[j++]) //if list2 has the smaller number push it to output
        }        
    }
    console.log("output is "+output)    
};

let list1=[1,2,4,6,7]
let list2=[2,3,5,6,7,8,9]
mergeTwoLists(list1, list2)

//output is 1,2,2,3,4,5,6,6,7,7,8,9,