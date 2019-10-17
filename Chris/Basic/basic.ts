declare var $;

class PersonBasics {
	name: string;
	age: number;
	jobTitle: string;

	constructor(name, age, jobTitle)  {
		this.name = name;
		this.age = age;
		this.jobTitle = jobTitle;
	}

	whoAreYou() {
		return `Hello there. My name is ${this.name}, I am ${this.age} years old and I am a ${this.jobTitle}`;
	}
}

var PaulBasics = new PersonBasics("Paul", 65, "Junior Developer");
console.log(PaulBasics.whoAreYou());


class PersonAdd extends PersonBasics {
	salary: number;
	jobLocation: string;

	constructor(name, age, jobTitle, salary, jobLocation) {
		super(name, age, jobTitle);
		this.salary = salary;
		this.jobLocation = jobLocation;
	}

	whoAreYouReally() {
		return `${super.whoAreYou()} and I get € ${this.salary},- every month, and I work in ${this.jobLocation}`;
	}
}

var PaulAdd = new PersonAdd("Paul", 65, "Junior Developer", 190000, "Guntramsdorf");
console.log(PaulAdd.whoAreYouReally());