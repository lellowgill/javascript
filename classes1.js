function Restaurant() {
    this.orders = [];
    this.menu = {
        //you use a menu in the key value pairs
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
    this.createOrder = function() {
        this.orders.push({
            items: [],
            totalCost: 0
        })
    }
    this.addItemToOrder = function(item, order) {
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