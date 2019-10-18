// Create an App that has to offer four different of types of vehicles
// and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and 
// possibility to view the price
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Create a Parent Class called Vehicles
// Define properties and methods for the super Class
// Consider the inheritance concept
// Define 2 other Child classes and name them Motor and Truck
// Based on the personal vehicle performance model, kilometers left, number of seats,
//  fuel type and year of production calculate the price once the user clicks on the button "show price" 
//  *use your dummy custom formula)
var Vehicles = /** @class */ (function () {
    function Vehicles(model, kmleft, noseats) {
        this.model = model;
        this.kmleft = kmleft;
        this.noseats = noseats;
    }
    Vehicles.prototype.carinfo = function () {
        return "model:" + this.model + " , " + this.kmleft + " , " + this.noseats + " ";
    };
    return Vehicles;
}());
var priceone = new Vehicles("A3", 5000, 5);
console.log(priceone.carinfo());
// car additional info
var addVehicles = /** @class */ (function (_super) {
    __extends(addVehicles, _super);
    function addVehicles(model, kmleft, noseats, fuel, prodyr) {
        var _this = _super.call(this, model, kmleft, noseats) || this;
        _this.fuel = fuel;
        _this.prodyr = prodyr;
        return _this;
    }
    addVehicles.prototype.addcarinfo = function () {
        return _super.prototype.carinfo.call(this) + " fuel:" + this.fuel + " ,production year: " + this.prodyr + " ";
    };
    return addVehicles;
}(Vehicles));
var pricetwo = new addVehicles("A3", 5000, 5, 2000, 2019);
console.log(pricetwo.addcarinfo());
// Create a Parent Class called Vehicles
// Define properties and methods for the super Class
// Consider the inheritance concept
// Based on the personal vehicle performance model, kilometers left, number of seats,
//  fuel type and year of production calculate the price once the user clicks on the button "show price" 
//  *use your dummy custom formula)
// Define 2 other Child classes and name them Motor
var motorVehicles = /** @class */ (function (_super) {
    __extends(motorVehicles, _super);
    function motorVehicles(model, kmleft, noseats, fuel, prodyr, motor) {
        var _this = _super.call(this, model, kmleft, noseats, fuel, prodyr) || this;
        _this.motor = motor;
        return _this;
    }
    motorVehicles.prototype.motorcarinfo = function () {
        return _super.prototype.addcarinfo.call(this) + " Motor:" + this.motor;
    };
    return motorVehicles;
}(addVehicles));
var pricethree = new motorVehicles("Harley", 5000, 2, "diesel", 2019, "Bosch");
console.log(pricethree.motorcarinfo());
function calpricethree() {
    return pricethree.kmleft * 100 / pricethree.noseats + pricethree.prodyr;
}
console.log(calpricethree());
// Define 2 other Child classes and name Truck
var truckVehicles = /** @class */ (function (_super) {
    __extends(truckVehicles, _super);
    function truckVehicles(model, kmleft, noseats, fuel, prodyr, truck) {
        var _this = _super.call(this, model, kmleft, noseats, fuel, prodyr) || this;
        _this.truck = truck;
        return _this;
    }
    truckVehicles.prototype.truckinfo = function () {
        return _super.prototype.addcarinfo.call(this) + " Truck:" + this.truck;
    };
    return truckVehicles;
}(addVehicles));
var pricefour = new truckVehicles("Iveco", "20000", 3, "diesel", 2013, "Bosch");
console.log(pricefour.truckinfo());
