/**
 * 
 *  A function that determines is a string
 * is a palindrome. "racecar" use lowerCase letters
 * @param {*} stringt    
 * 
 */  

//mom bob dad can be spelled forwards and backwards
function isPalindrome(string) {
    let index = 0;
    let indexFromBack = string.length -1;
    while (index <= indexFromBack) {
        if(string.charAt(index) !== string.charAt(indexFromBack)) {
            return false;
        }
        index++;
        indexFromBack--;
    }
    return true;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("cool"));
console.log(isPalindrome("mom"));