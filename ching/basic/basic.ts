class Person { // 
   Name = ""; // ②  
   jobTitle = "";
   age = ""; 
    constructor(Name, jobTitle, age) { // ③
       this.Name = Name;
       this.jobTitle=jobTitle;
       this.age=age;
   }
     greeting() { // ④
       return `My name is ${this.Name} ,I am ${this.jobTitle} i am ${this.jobTitle} and ${this.age} years old` ;
   }
   
}
var info = new Person("Mario", "sales", 23);
console.log(info.greeting());




// Create a class based on the Person class and add some other properties like salary, 
// jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) 
// every month, and I work in (jobLocation)”

class addinfo extends Person { // ①
   salary; 
   joblocation;


   constructor(Name, jobTitle, age, salary, joblocation) {
       super(Name, jobTitle, age); // ③
       this.salary = salary;
       this.joblocation=joblocation;
   }

   greeting() { // ④
       return `${super.greeting()} and I get  ${this.salary}euro and work in${this.joblocation}`; // ⑤
   }
}

var newinfo = new addinfo("Mario", "sales", 23, "2000", "vienna");
console.log(newinfo.greeting());