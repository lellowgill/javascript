/**
 * function
 * takes in a string 
 * count respeated chareactoers 
 * count of charactiers and actual charactier to string
 * do this for all characters 
 * EDGE CASE
 * if the count is over 9 restart the count 
*/

//HELLO equals the string 
function stringRunLengthEncoder(string) {
    let encodedString = "";
    let currentCharacter = null;
    let currentCharacterCount = 0;
    let index = 0;
    //for (let index = 0; index < string.length; index++) 
    while (index < string.length) {
        currentCharacter = string.charAt(index); // H
        currentCharacterCount = 0;
        while(currentCharacter === string.charAt(index) && currentCharacterCount < 10) {
            currentCharacterCount++;
            index++;
        }
        encodedString += `${currentCharacterCount}${currentCharacter}`;
    }
    return encodedString;
}
console.log(stringRunLengthEncoder("HELLLLLOOOO"));
console.log(stringRunLengthEncoder("Heyyyyyy"))

//when you want to check a condition use s while loop and for loop 




/**string = "AAAAAAAAAAAABBCCCCDD"

let string = "";

function stringSum {
    for(let i = 0; i = 12 i++) {
        return("")
    }
};
console.log("9A4A2B4C2D")
*/