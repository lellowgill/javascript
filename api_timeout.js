//Log a string with a characters name and culture like so:
//"(Debbie Wright)" was of (Black) culture"

// 2) Log a string of all of the characters aliases
//.then being if this happens and i need a return statement after each then statement 
fetch('https://anapioficeandfire.com/api/characters/583')
.then(function(response) {
    //PARSE THE JSON INTO ACTUAL JS OBJECT  
    //parsing is passing the data as a "string" that we can use
    return response.json();
})
.then(function(data) {
    console.log(data);
    return data;
})

//concatenation make spaces in the string in between the quotations 
.then(function(data) {
    console.log(data.name + " was of " + data.culture + " culture");
    return data;
}) 
.then(function(data) {
    console.log(data.aliases);
    return data;
})
//create a loop to access an array for Jon Snow's aliases
.then(function(data) {
    for(let i = 0; i < data.aliases.length; i++)
        console.log(data.aliases[i]);
})
//When you create a for loop you don't need to make return