/**
 * Create a function that takes in a string and reverse the string 
 * recursion built in mechanisms 
 */


function reverseString(str) {
    let splitString = str.split("").reverse().join("");

    return splitString;
    
}

console.log(reverseString("hello"));