/**PROMISES
 * 
 * [] Function Returns + Method Chaining 
 * [] Understand what they are
 * [] Understand why we use them
 * [] Understand JSON (JavaScript Object Notation)
 */

//fetch('https://anapiificeandfire.com/api/characters/583')
//.then(function(response) {
    //console.log(response);
// })

//  "{
//        characterName: 'Jon Snow'
//        age: 20,
//   }"

fetch('https://anapioficeandfire.com/api/characters/583')
.then(function(response) {
    //PARSE THE JSON INTO ACTUAL JS OBJECT  
    //parsing is passing the data as a "string" that we can use
    return response.json();
})
.then(function(data) {
    console.log(data);
}) 

//"{name: 'debbie', age: 21}"
//{name: 'debbie', age; 21}


/**fetch('sample.txt')
.then(function(response) {
    //PARSE THE JSON INTO ACTUAL JS OBJECT  
    //parsing is passing the data as a "string" that we can use
    return response.text();
    //it should return the text that i have on sample.txt which is Hello, I am here!
})
.then(function(data) {
    console.log(data);
}) 

/**fetch('https://placekitten.com/400/400')
.then(function(response) {
    return response.json();
})
.catch(function(response) {
    console.log(response);
})
*/

fetch("sample.txt")
.then(function(response) {
    return response.text();
})
.then(function(data) {
    console.log(data);
}) 

