/*Basic Exercise 1*/

class Person {
	name = "";
	age = "";
	job = "";

	constructor(name, age, job) {
		this.name = name;
		this.age = age;
		this.job = job;
	}

	hello() {
		return `Hello there, my name is ${this.name} and I am ${this.age} years old
		and I am a ${this.job}`
	}
}

	let mister = new Person("Robert", 29, "student");
	console.log(mister.name);

/*Basic Exercise 2*/

class PersonPlus extends Person {
	salary;
	jobLocation;

	constructor(name, age, job, salary, jobLocation) {
		super(name, age, job);
		this.salary = salary;
		this.jobLocation = jobLocation;
	}

	addInfo() {
		return `${super.hello()}, I get ${this.salary} and I work in ${this.jobLocation}.`
	}
	}

let MrPlus = new PersonPlus("Robert", 29, "Master Coder", "10000€ per month", "Vienna");
console.log(MrPlus.addInfo());