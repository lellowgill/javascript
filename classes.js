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
