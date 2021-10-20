//New Version way (ES6)

class Car {
    constructor(color) {
        this.color = color;
        this.numberOfWheels = 4;
        this.numberOfDoors = 4;
        this.isRunning = false;
    
    }

    startEngine() {
        this.isRunning = true;
    }
}

class Infiniti extends Car {
    constructor(color, techPackage) {
        // Super essentially calls the constructor of the parent class
        //or the class it extends from the constructor function
        super(color)
        this.techPackage = techPackage;
    }
}

let myInfiniti = new Infiniti("pearl white", "premium");
console.log(myInfiniti);

/**
 * Class keyword
 * Extend
 * Super which builds on top of the function
 * reviewed object constructor functions
 */