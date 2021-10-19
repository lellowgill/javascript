/**
 * Create a function that takes in a string and reverse the string 
 * recursion built in mechanisms 
 * 
 */


/**function reverseString(str) {
    let splitString = str.split("").reverse().join("");
    
    return splitString;
    
}

console.log(reverseString("hello"));
*/

/**
 * Write a function that Calculates the sum of numbers in this array
 */

 /** var ar = [2, 3, -1, 5, 7, 9, 10, 15, 95]
 const array = [2, 3, -1, 5, 7, 9, 10, 95]

 let sumArray = (ar) => {
    let sum = 0;
    for(let i = 0; i < ar.length; i++)
    {
        sum += ar[i];
    }
    return sum;
}
const ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
// var sum = sumArray(ar);
console.log(sumArray(ar));



 const sum = [2, 3, -1, 5, 7, 9, 10, 15, 95].reduce(add,0)
    function add(accumulator, a) {
        return accumulator + a;
    }
console.log() */
 

/**
 * 
 * 
 * 
 */

function middleNumber(array) {
    if (array.length % 2 == 0) {
        console.log(array[array.length -1]);
    } else {
        let middleIndex = (array.length / 2) - 0.5
        console.log(array[middleIndex])
    }
}
middleNumber([1, 2, 3, 4]);
middleNumber([1, 2, 3, 4,5]);