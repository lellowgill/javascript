//New Version way (ES6)

class Car {
    constructor(color) {
        this.color = color;
        this.numberOfWheels = 4;
        this.numberOfDoors = 4;
        this.isRunning = false, 
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
 * :: OBJECT CONSTRUCTOR FUNCTION
 *    A Function that constructors an object from the blueprint we provide
 * 
 * :: PROPERTIES
 *    A value that you can set and access on an object
 *    
 * :: METHODS
 *    A function that you can set and call on an object
 * 
 * :: CLASS
 *    Keyword to used to create a class  
 * 
 * :: EXTEND
 *    Keyword to select which class to build on top of or inherit from.
 * 
 * :: SUPER
 *    Calls the constructor of the parent class or the class it's extending from
 */

