// Create an App that has to offer four different of types of vehicles
// and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and 
// possibility to view the price

// Create a Parent Class called Vehicles
// Define properties and methods for the super Class
// Consider the inheritance concept
// Define 2 other Child classes and name them Motor and Truck
// Based on the personal vehicle performance model, kilometers left, number of seats,
//  fuel type and year of production calculate the price once the user clicks on the button "show price" 
//  *use your dummy custom formula)


class Vehicles  {
   constructor(public model, public kmleft, public noseats) {
   }

     carinfo() { // ④
       return `model:${this.model} , ${this.kmleft} , ${this.noseats} ` ;
   }
   
}
var priceone = new Vehicles("A3", 5000, 5);
console.log(priceone.carinfo());


// car additional info
class addVehicles extends Vehicles {
   fuel; 
   prodyr;
   

   constructor(model, kmleft, noseats, fuel, prodyr) {
      super(model, kmleft, noseats); // ③
       this.fuel= fuel;
       this.prodyr=prodyr;

   }


     addcarinfo() { // ④
       return `${super.carinfo()} fuel:${this.fuel} ,production year: ${this.prodyr} ` ;
   }
   
}
var pricetwo = new addVehicles("A3", 5000, 5, 2000, 2019);
console.log(pricetwo.addcarinfo());








// Create a Parent Class called Vehicles
// Define properties and methods for the super Class
// Consider the inheritance concept

// Based on the personal vehicle performance model, kilometers left, number of seats,
//  fuel type and year of production calculate the price once the user clicks on the button "show price" 
//  *use your dummy custom formula)

// Define 2 other Child classes and name them Motor
class motorVehicles extends addVehicles {
  motor;

   constructor(model, kmleft, noseats, fuel, prodyr, motor) {
      super(model, kmleft, noseats, fuel, prodyr); // ③
       this.motor= motor;

   }


     motorcarinfo() { // ④
       return `${super.addcarinfo()} Motor:${this.motor}` ;
   }
   
}
var pricethree = new motorVehicles("Harley", 5000, 2, "diesel", 2019, "Bosch");
console.log(pricethree.motorcarinfo());

function calpricethree() {

       return pricethree.kmleft*100 /pricethree.noseats + pricethree.prodyr ;
   }  
   console.log(calpricethree()); 

// Define 2 other Child classes and name Truck
class truckVehicles extends addVehicles {
  truck;

   constructor(model, kmleft, noseats, fuel, prodyr, truck) {
      super(model, kmleft, noseats, fuel, prodyr); // ③
       this.truck= truck;

   }

     truckinfo() { // ④
       return `${super.addcarinfo()} Truck:${this.truck}` ;
   }
   
}
var pricefour = new truckVehicles("Iveco", "20000", 3, "diesel", 2013, "Bosch");
console.log(pricefour.truckinfo());



