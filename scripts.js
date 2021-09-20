//THIS CREATES A NOTE FOR YOURSELF...

console.log
("This is the house that jack built");  
console.log
("Did you see the house that Jack built?")
console.log("Deborium");
console.log(typeof true);
console.log(typeof null);
console.log(typeof [1, 2, 3, 4]);
console.log(new Date());

//array it's like a list in python...
function printName() {
    console.log("Deb Wright");
}
printName();

/**
 * this is a multi line comment
 * help i have wrote another note
 * on the next line...
 */

//Learning objectives
/**
 * Understand variables and use them
 * Create and modify, and delete array items 
 * Create and modify, and delete object items
 * Create functions
 * Know and understand the JS console
 */

//several ways  to create a variables
//var is Globally scooped
var firstName = "Deborium";

let middleName = "Jo";

let age = 25;

//constant can not be changed
const lastName = "Wright";


const user = {
    firstName: "Deborium",
    middleName: "Jo"
}

console.log(user);

user["age"] = 25

console.log(user);

const numbers = [1, 2, 3, 4,];
console.log(numbers);

//this will count upto 4 on the console
numbers.push(5);

console.log(firstName, middleName, age, lastName);

/*function sayHello() {
    console.log('hello');
    console.log('hello');
}

sayHello()*/

function add(x, y) {
    const total = x + y;
    
    return total;  

    console.log('okay')
}

const sum = add(5, 7)

console.log(sum);
/**
 * the return keyword is going print out whatever the value to the right of it. 
 * so if there is nothing/no value to the right of it, it will print nothing.
 * within the braces the next line will not be read after place the return 
 * command in the code
 */


//  function add(x, y) {
//     const total = x + y;
    
//     return total;  

//     console.log('okay')
// }

// const me = add(7, 7)

// console.log(me);

/**
 * Create a function that you can pass 3 arguments to, 
 * but returns a string of "OMG" no matter what,
 * The return value should be saved as a variable that can't be changed. 
 */

 /**function add(i, and, you) {
    const omg = "OMG"
    return omg;
}

console.log(add(1,2,3))
console.log(add("both","you","us"))
console.log(add("them",2,99))*/

function she(x, y, z) {
    const blush = x + y + z;
    return blush;
}

const answer = she("O", "M", "G")

console.log(answer)

function sayHello {
    return; 

    console.log('bye');
}

var greeting = sayHello();

console.log(greeting);
//if i print this to the console it will say undefined
//var let const will save data for later
