/**
 * [] 
 * []
 * []
 *
 */

/*functionDog(name, color, bred) {
    this.name = name;
    this.color = color;
    this.bred = bred;
}

let dog1 = new Dog("Clifford", "red", "big dog");
let dog2 = new Dog("Spot", "black and white", "doberman");*/

/**function Cookie(flavor, size, calories) {
    this.flavor = flavor;
    this.size = size;
    this.calories = calories;
}

let KaiZensCookie = ("chocolate chip", "small", "50");
let WeisCookie = ("peanut butter", "medium", "60"); */

/**
 * Write an object constructor function that will allow us to do 
 * the same thing without repeating the structure/blueprint of an order
 */
//this.items represents the object that is going to be returned
//let obj = {}
//Think about how you design your blueprint and if you want to add new flavors you will
//need a different data type
//lunchCookie.flavor.push("sugar") will let you add another flavor
//you pass in dynamically is the size



//It is considered good practice to name constructor functions with an upper-case first letter.
/**The this Keyword
In JavaScript, the thing called this is the object that "owns" the code.

The value of this, when used in an object, is the object itself. */
// A class is blueprint when creating an object

//Note that this. is not a variable. It is a keyword. You cannot change the value of this.
// 
function Order(items, price, delivery) {
    //PROPERTIES: Values we can access on an object. 
    this.items = items;
    this.price = price;
    this.delivery = delivery;
//Object consturctor function    
}
let order1 = {
    items: ["pizza", "salad", "breadsticks"],
    price: 100,
    delivery: false
};
let order2 = {
    items: ["pizza"],
    price: 25,
    delivery: true
}

let myPie = new Order(["pizza", "salad", "breadsticks"], 100, false);
let thePie = new Order(["pizza", 25, true]);

console.log(order1, order2);
//new
//this
//object constructor


function Cookies(flavor, size) {
    this.flavor = flavor;
    this.size = size;
    this.brandName = "Cookies";
//a Method is a Function Defined on an Object
    this.printDetails = function () {
        console.log(this.flavor, this.size);
    }
}
let name = new String("deborium");


