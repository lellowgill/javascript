/**
 * Create a Car class that has properties of a basic car (Ex: tires, engine)
 * 
 * The Car class should also have at least 1 method
 * 
 * Create a CarBrand class that build on top the Car class 
 * and gives specifics about that brand
 */

function Car(sunRoof, engine, techPackage) {
    this.tiresStandard = true;
    this.sunRoof = sunRoof;
    this.engine = engine;
    this.techPackage = techPackage;
}
openSunRoof() {
    if (sunRoof) {
        this.sunRoofOpen = true;
    }
}

/**class Car {
    constructor(radio, engine, sunRoof) {
        this.radio = radio;
        this.engine = engine;
        this.sunRoof = sunRoof;
        this.sunroofOpen = false;
    }    
    openSunroof(){
         if (this.sunRoof){
                this.sunroofOpen = true;
            }
    
    }
    closeSunroof() {
         if (this.sunRoof) {
               this.sunRoofOpen = false;
            }
        
    }    
}


class CarBrand extends Car {
    constructor(radio, engine, sunroof, make, model) {
        super(radio, engine, sunroof);
        this.make = make;
        this.model = model;
    }
}

let newCar = new CarBrand("bose", "v12", false, "BMW", "i8");

newCar.openSunroof();
console.log(newCar); */




