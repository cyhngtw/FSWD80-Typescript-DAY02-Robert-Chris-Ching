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
var PersonBasics = /** @class */ (function () {
    function PersonBasics(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    PersonBasics.prototype.whoAreYou = function () {
        return "Hello there. My name is " + this.name + ", I am " + this.age + " years old and I am a " + this.jobTitle;
    };
    return PersonBasics;
}());
var PaulBasics = new PersonBasics("Paul", 65, "Junior Developer");
console.log(PaulBasics.whoAreYou());
var PersonAdd = /** @class */ (function (_super) {
    __extends(PersonAdd, _super);
    function PersonAdd(name, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    PersonAdd.prototype.whoAreYouReally = function () {
        return _super.prototype.whoAreYou.call(this) + " and I get \u20AC " + this.salary + ",- every month, and I work in " + this.jobLocation;
    };
    return PersonAdd;
}(PersonBasics));
var PaulAdd = new PersonAdd("Paul", 65, "Junior Developer", 190000, "Guntramsdorf");
console.log(PaulAdd.whoAreYouReally());
