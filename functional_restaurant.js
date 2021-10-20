/**
 * Create a restaurant class using an object contructor function and using the class keyword
 * 
 * This restaurant should be able to keep record of:
 *      orders
 *          
 *          items
 *          total cost
 *      a menu
 *          items
 *              item name
 *              price
 *      the ability to create an orders
 *      this ability to add an item to an order
 */

let ourRestaurant = {
    items: ["pizza", "chicken", "french fries", "hot dog", "soda"],
    totalCost: 85, 
}
let ourRestaurant2 = {
    items: ["salad", "broccoli", "strawberries"],
    totalCost: 35,
}
//function Restaurant(items: any, totalCost: any): you can order any item off of the menu
//with a total cost

function Restaurant(items, totalCost) {
    //PROPERTIES: Values we can access on an object. 
    this.items = items;
    this.totalCost = totalCost;
//Object consturctor function    
};

let consumerGuy = new Restaurant (["pizza", "chicken", "french fries", "hot dog", "soda"], 85);
let consumerGal = new Restaurant (["salad", "broccoli", "strawberries"], 35);

console.log(consumerGuy);
console.log(consumerGal);


