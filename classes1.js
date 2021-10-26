/**
 * Classes
 *      What are Classes? / Why do we use classes? 
 *      > To make a blueprint for an object we'll use over an over again.
 * 
 *      What are two way to create a class
 *      > object constructor function
 *      > class keyword w/ constructor 
 *      METHODS 
 *      > a function we can call on an object
 *      PROPERTIES
 *      > a value we can acces on an object
 *      Extending/Extend / Super
 *      > 
 * create a restaurant class
 * the restaurant class need to have the ability to create an order
 */ 
function Restaurant() {
    //keep record of he orders
    this.orders = [];
    this.menu = {
        //you can use a menu in the key value pairs are good for coupling information together
        theSpecial: {
            name: "sandwhich and soup",
            price: 12
        },
        sandwhich: {
            name: "good sandwhich",
            price: 8
        },
        soup: {
            name: "good soup",
            price: 8
        },
        drink: {
            name: "tap water",
            price: 50
        }
    };
    //The ability to create an order
    this.createOrder = function() {
        this.orders.push({
            items: [],
            totalCost: 0
        })
    }
    this.addItemToOrder = function(item, order) {
        //add item to an existing order
        order.items.push(item);
        order.totalCost += item.price;
    }
}

let myRestaurant = new Restaurant();
myRestaurant.createOrder();
//add an order to this.orders
let firstOrder = myRestaurant.orders[0];
let itemToOrder = myRestaurant.menu.theSpecial;
myRestaurant.addItemToOrder(itemToOrder, firstOrder);
itemToOrder = myRestaurant.menu.drink;
myRestaurant.addItemToOrder(itemToOrder, firstOrder);
console.log(firstOrder);