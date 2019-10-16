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
var Vehicles = /** @class */ (function () {
    function Vehicles(carName, productionYear, power, km, numberOfSeats, fuelType) {
        this.carName = carName;
        this.productionYear = productionYear;
        this.power = power;
        this.km = km;
        this.numberOfSeats = numberOfSeats;
        this.fuelType = fuelType;
    }
    ;
    Vehicles.prototype.calculatePrice = function () {
        if (this.fuelType === "Diesel") {
            var x = this.productionYear * 10 + this.power * 50 + (this.km * 0.8) + (this.numberOfSeats * 1000) + 10000;
        }
        else if (this.fuelType === "Super Plus") {
            var x = this.productionYear * 10 + this.power * 50 + (this.km * 0.8) + (this.numberOfSeats * 1000) + 15000;
        }
        else {
            var x = this.productionYear * 10 + this.power * 50 + (this.km * 0.8) + (this.numberOfSeats * 1000) + 7000;
        }
        document.getElementById("price").innerHTML = x.toString();
    };
    return Vehicles;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(carName, productionYear, power, km, numberOfSeats, fuelType, topSpeed, carClass) {
        var _this = _super.call(this, carName, productionYear, power, km, numberOfSeats, fuelType) || this;
        _this.topSpeed = topSpeed;
        _this.carClass = carClass;
        return _this;
    }
    //e.g. luxury car, etc
    Car.prototype.addInfo = function () {
        var infos = "Name: " + this.carName + " <br> Year of production: " + this.productionYear + " <br>\n\t\t\tPower: " + this.power + " HP <br> KM (driven): " + this.km + " km <br> Number of seats: " + this.numberOfSeats + " <br>\n\t\t\tType of fuel: " + this.fuelType + " <br> Top Speed: " + this.topSpeed + " km/h <br>Class: " + this.carClass;
        document.getElementById("info").innerHTML = infos;
    };
    return Car;
}(Vehicles));
var audi = new Car("Audi A8", 2017, 120, 500, 4, "Diesel", 200, "luxury");
var toyota = new Car("Toyota RAV4", 2015, 150, 800, 5, "Super Plus", 160, "SUV");
var MotorBike = /** @class */ (function (_super) {
    __extends(MotorBike, _super);
    function MotorBike(carName, productionYear, power, km, numberOfSeats, fuelType, purpose, cubic) {
        var _this = _super.call(this, carName, productionYear, power, km, numberOfSeats, fuelType) || this;
        _this.purpose = purpose;
        _this.cubic = cubic;
        return _this;
    }
    MotorBike.prototype.addInfo = function () {
        var infos = "Name: " + this.carName + " <br> Year of production: " + this.productionYear + " <br>\n\t\t\tPower: " + this.power + " HP <br> KM (driven): " + this.km + " km <br> Number of seats: " + this.numberOfSeats + " <br>\n\t\t\tType of fuel: " + this.fuelType + " <br> Purpose: " + this.purpose + " <br>Cubic: " + this.cubic + " ccm";
        document.getElementById("info").innerHTML = infos;
    };
    return MotorBike;
}(Vehicles));
var harley = new MotorBike("Harley Davidson", 2015, 120, 250, 2, "Super Plus", "long-distance travel", 200);
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(carName, productionYear, power, km, numberOfSeats, fuelType, size, maxWeight) {
        var _this = _super.call(this, carName, productionYear, power, km, numberOfSeats, fuelType) || this;
        _this.size = size;
        _this.maxWeight = maxWeight;
        return _this;
    }
    Truck.prototype.addInfo = function () {
        var infos = "Name: " + this.carName + " <br> Year of production: " + this.productionYear + " <br>\n\t\t\tPower: " + this.power + " HP <br> KM (driven): " + this.km + " km <br> Number of seats: " + this.numberOfSeats + " <br>\n\t\t\tType of fuel: " + this.fuelType + " <br> Size: " + this.size + " <br>Max weight: " + this.maxWeight + " t";
        document.getElementById("info").innerHTML = infos;
    };
    return Truck;
}(Vehicles));
var man = new Truck("MAN", 2009, 700, 1200, 3, "Super Plus", "very big", 40);
var vehicleList = [audi, toyota, harley, man];
for (var index in vehicleList) {
    document.getElementById("car-card").innerHTML += vehicleList[index].carName + "<br><button class='info-btn'>Get more information</button><br>\n\t<br><button class='price-btn'>Get Price</button><br><br>";
}
var _loop_1 = function (index) {
    document.getElementsByClassName('price-btn')[index].addEventListener('click', function () {
        vehicleList[index].calculatePrice();
    });
    document.getElementsByClassName('info-btn')[index].addEventListener('click', function () {
        vehicleList[index].addInfo();
    });
};
for (var index in vehicleList) {
    _loop_1(index);
}
/*	size : string; //e.g. ultra light, very light, medium, heavy
    maxWeight : number; //maximum weight it can carry*/
