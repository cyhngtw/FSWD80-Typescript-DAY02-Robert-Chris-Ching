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
var Person = /** @class */ (function () {
    function Person(Name, jobTitle, age) {
        this.Name = ""; // ②  
        this.jobTitle = "";
        this.age = "";
        this.Name = Name;
        this.jobTitle = jobTitle;
        this.age = age;
    }
    Person.prototype.greeting = function () {
        return "My name is " + this.Name + " ,I am " + this.jobTitle + " i am " + this.jobTitle + " and " + this.age + " years old";
    };
    return Person;
}());
var info = new Person("Mario", "sales", 23);
console.log(info.greeting());
// Create a class based on the Person class and add some other properties like salary, 
// jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) 
// every month, and I work in (jobLocation)”
var addinfo = /** @class */ (function (_super) {
    __extends(addinfo, _super);
    function addinfo(Name, jobTitle, age, salary, joblocation) {
        var _this = _super.call(this, Name, jobTitle, age) || this;
        _this.salary = salary;
        _this.joblocation = joblocation;
        return _this;
    }
    addinfo.prototype.greeting = function () {
        return _super.prototype.greeting.call(this) + " and I get  " + this.salary + "euro and work in" + this.joblocation; // ⑤
    };
    return addinfo;
}(Person));
var newinfo = new addinfo("Mario", "sales", 23, "2000", "vienna");
console.log(newinfo.greeting());
