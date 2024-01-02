var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(email, age, phone, city) {
        this.email = email;
        this.age = age;
        this.phone = phone;
        this.email = email;
        this.age = age;
        this.phone = phone;
        this.city = city;
    }
    return User;
}());
var Raj = new User("raj@gmail.com", 43, 987654321, "Kathmandu");
console.log(Raj);
var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this._courseCount = 0;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    Object.defineProperty(Student.prototype, "courseCountNum", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseCountNumber) {
            if (courseCountNumber <= 1) {
                throw new Error("Cannot be less than 1");
            }
            this._courseCount = courseCountNumber;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var NewStudent = /** @class */ (function (_super) {
    __extends(NewStudent, _super);
    function NewStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewStudent.prototype.changeCoursrCount = function () {
        this._courseCount = 4;
    };
    return NewStudent;
}(Student));
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Bob", "M", "Kenctucky");
console.log(greeter(user));
var School = /** @class */ (function () {
    function School(name, established_date, level) {
        this.name = name;
        this.established_date = established_date;
        this.level = level;
    }
    School.prototype.complexCalculations = function () {
        // Some comples calculations.
        return 32;
    };
    return School;
}());
var Patshala = /** @class */ (function (_super) {
    __extends(Patshala, _super);
    function Patshala(name, established_date, level, classes) {
        var _this = _super.call(this, name, established_date, level) || this;
        _this.name = name;
        _this.established_date = established_date;
        _this.level = level;
        _this.classes = classes;
        return _this;
    }
    Patshala.prototype.getName = function () {
        return "yes it does";
    };
    return Patshala;
}(School));
var newSchool = new Patshala("Patshala", 1995, "Secondary", 12);
console.log(newSchool.name);
