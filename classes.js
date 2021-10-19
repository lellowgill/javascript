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


//a Method is a Function Defined on an Object
//It is considered good practice to name constructor functions with an upper-case first letter.


function Order(items, price, delivery) {
    this.items = items;
    this.price = price;
    this.delivery = delivery;
    
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
