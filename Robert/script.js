/*Basic Exercise 1*/
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
    function Person(name, age, job) {
        this.name = "";
        this.age = "";
        this.job = "";
        this.name = name;
        this.age = age;
        this.job = job;
    }
    Person.prototype.hello = function () {
        return "Hello there, my name is " + this.name + " and I am " + this.age + " years old\n\t\tand I am a " + this.job;
    };
    return Person;
}());
var mister = new Person("Robert", 29, "student");
console.log(mister.name);
/*Basic Exercise 2*/
var PersonPlus = /** @class */ (function (_super) {
    __extends(PersonPlus, _super);
    function PersonPlus(name, age, job, salary, jobLocation) {
        var _this = _super.call(this, name, age, job) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    PersonPlus.prototype.addInfo = function () {
        return _super.prototype.hello.call(this) + ", I get " + this.salary + " and I work in " + this.jobLocation + ".";
    };
    return PersonPlus;
}(Person));
var MrPlus = new PersonPlus("Robert", 29, "Master Coder", "10000€ per month", "Vienna");
console.log(MrPlus.addInfo());
