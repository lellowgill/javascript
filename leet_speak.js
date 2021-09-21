//Leetspeak
//Write a function leetspeak
//which is given a string,
//and returns the leetspeak equivalent of the string, 

//To Convert text to it's leetspeak version, make the following substitutions:

//A => 4 E => 3 G => 6 I => 10 => 0 S => 5 T => 7


function leetspeak(word) {
    let currentCharacter = null
    let newWord = new Array(word.length);

    //counter           condition           increment/decrement
    for (let counter = 0; counter < word.length; counter++){
        //get access to each character 
        //check for match in cipher
        console.log('COUNTER:', counter, word[counter]);
        //console.log(word[counter])
        let currentCharacter = word[counter];

    
//A => 4 E => 3 G => 6 I => 10 => 0 S => 5 T => 7
        switch (currentCharacter) {
            case "a":
                currentCharacter = 4;
                break;
            case "e":
                currentCharacter = 3;
                break; 
            case "g":
                currentCharacter = 6;
                break; 
            case "i":
                currentCharacter = 10;
                break; 
                currentCharacter = 0;
            default:
                break;
        }
        //newArray.push(currentCharacter);
        newWord.push(currentCharacter)
    }

//counter = counter + 1;
//return leetspeakString;
    return newWord.join(""); 
}
leetspeak("Amanda gail peterson");