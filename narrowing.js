// Instance of Narrowing
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
function checkValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString);
    }
    if (x instanceof String) {
        console.log(x.toLowerCase);
    }
}
checkValue("String");
function isFish(pet) {
    return pet.swim != undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    else {
        pet;
        return "Bird Food";
    }
}
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        return "Wouf Wouf!";
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.meow = function () {
        return "Meow Meow!";
    };
    return Cat;
}(Animal));
function isDog(animal) {
    return animal instanceof Dog;
}
function petSounds(animal) {
    if (isDog(animal)) {
        console.log(animal.bark());
    }
    else if (animal instanceof Cat) {
        console.log(animal.meow());
    }
}
var myDog = new Dog("Bob");
var myCat = new Cat("Tommy");
petSounds(myDog);
petSounds(myCat);
// Using Functions and conditional statements
// const getArea = (shape: Shape) => {
//   if (shape.kind === "circle") {
//     return Math.PI * shape.radius! ** 2;
//   }
// };
// console.log(getArea({ kind: "circle", radius: 4 }));
// Using Switch Statements.
// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius! ** 2;
//     case "square":
//       return shape.sideLength ** 2;
//   }
// }
// console.log(getArea({ kind: "square", sideLength: 6 }));
// Using Exhaustiveness checking
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
        case "triangle":
            return 0.5 * shape.base * shape.height;
        default:
            var _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
console.log(getArea({ kind: "circle", radius: 8 }));
