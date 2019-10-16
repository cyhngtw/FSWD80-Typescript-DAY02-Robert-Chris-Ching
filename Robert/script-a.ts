
class Vehicles {
	constructor(public carName : string, public productionYear : number, 
		public power : number, public km : number, public numberOfSeats : number, public fuelType : string) {};
	
	calculatePrice() {
		if (this.fuelType === "Diesel") {
			var x = this.productionYear * 10 + this.power * 50 + (this.km * 0.8) + (this.numberOfSeats * 1000) + 10000;
		} else if (this.fuelType === "Super Plus") {
			var x = this.productionYear * 10 + this.power * 50 + (this.km * 0.8) + (this.numberOfSeats * 1000) + 15000;
		} else {
			var x = this.productionYear * 10 + this.power * 50 + (this.km * 0.8) + (this.numberOfSeats * 1000) + 7000;
	} 
	document.getElementById("price").innerHTML = x.toString();
	}
}

class Car extends Vehicles {
	constructor(carName : string, productionYear : number, power : number, 
		km : number, numberOfSeats : number, fuelType : string, public topSpeed : number, public carClass : string){
		super(carName, productionYear, power, km, numberOfSeats, fuelType);
	}
	//e.g. luxury car, etc
	
	addInfo() {
		var infos = `Name: ${this.carName} <br> Year of production: ${this.productionYear} <br>
			Power: ${this.power} HP <br> KM (driven): ${this.km} km <br> Number of seats: ${this.numberOfSeats} <br>
			Type of fuel: ${this.fuelType} <br> Top Speed: ${this.topSpeed} km/h <br>Class: ${this.carClass}`
	document.getElementById("info").innerHTML = infos;
	}
}

var audi = new Car("Audi A8", 2017, 120, 500, 4, "Diesel", 200, "luxury");
var toyota = new Car("Toyota RAV4", 2015, 150, 800, 5, "Super Plus", 160, "SUV");

class MotorBike extends Vehicles {
	constructor(carName : string, productionYear : number, power : number, 
		km : number, numberOfSeats : number, fuelType : string, public purpose : string, public cubic : number){
		super(carName, productionYear, power, km, numberOfSeats, fuelType);
	}

	addInfo() {
		var infos = `Name: ${this.carName} <br> Year of production: ${this.productionYear} <br>
			Power: ${this.power} HP <br> KM (driven): ${this.km} km <br> Number of seats: ${this.numberOfSeats} <br>
			Type of fuel: ${this.fuelType} <br> Purpose: ${this.purpose} <br>Cubic: ${this.cubic} ccm`
	document.getElementById("info").innerHTML = infos;
	}

	
//purpose e.g. offroad, long-distance, commuting	
}

var harley = new MotorBike("Harley Davidson", 2015, 120, 250, 2, "Super Plus", "long-distance travel", 200 );

class Truck extends Vehicles {
	constructor(carName : string, productionYear : number, power : number, 
		km : number, numberOfSeats : number, fuelType : string, public size : string, public maxWeight : number){
		super(carName, productionYear, power, km, numberOfSeats, fuelType);
	}

	addInfo() {
		var infos = `Name: ${this.carName} <br> Year of production: ${this.productionYear} <br>
			Power: ${this.power} HP <br> KM (driven): ${this.km} km <br> Number of seats: ${this.numberOfSeats} <br>
			Type of fuel: ${this.fuelType} <br> Size: ${this.size} <br>Max weight: ${this.maxWeight} t`
	document.getElementById("info").innerHTML = infos;
	}


}
var man = new Truck("MAN", 2009, 700, 1200, 3, "Super Plus", "very big", 40);

var vehicleList = [audi, toyota, harley, man];


for (let index in vehicleList) {
	document.getElementById("car-card").innerHTML += vehicleList[index].carName + `<br><button class='info-btn'>Get more information</button><br>
	<br><button class='price-btn'>Get Price</button><br><br>`;
	}

for (let index in vehicleList) {
	document.getElementsByClassName('price-btn')[index].addEventListener('click', function() {
		vehicleList[index].calculatePrice()});
	document.getElementsByClassName('info-btn')[index].addEventListener('click', function() {
		vehicleList[index].addInfo()});
	}



/*	size : string; //e.g. ultra light, very light, medium, heavy
	maxWeight : number; //maximum weight it can carry*/


