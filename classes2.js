//My class keyword created Class

class Restaurant {
    //class keyword used
    constructor() {
        this.orders = [];
        this.menu = {
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
    }

    createOrder() {
        this.orders.push({
            items: [],
            totalCost: 0
        })
    }

    addItemToOrder(item, order) {
        order.items.push(item);
        order.totalCost += item.price;
    }
}

let myRestaurant = new Restaurant();
myRestaurant.createOrder();
let firstOrder = myRestaurant.orders[0];
let itemToOrder = myRestaurant.menu.theSpecial;
myRestaurant.addItemToOrder(itemToOrder, firstOrder);
itemToOrder = myRestaurant.menu.drink;
myRestaurant.addItemToOrder(itemToOrder, firstOrder);
console.log(firstOrder);











