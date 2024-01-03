// Instance of Narrowing

function checkValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString);
  }
  if (x instanceof String) {
    console.log(x.toLowerCase);
  }
}
checkValue("String");

// The in operator narrowing.

type Bird = { fly(): void };
type Fish = { swim(): void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim != undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "Fish Food";
  } else {
    pet;
    return "Bird Food";
  }
}

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark() {
    return "Wouf Wouf!";
  }
}

class Cat extends Animal {
  meow() {
    return "Meow Meow!";
  }
}

function isDog(animal: Animal): animal is Dog {
  return animal instanceof Dog;
}

function petSounds(animal: Animal) {
  if (isDog(animal)) {
    console.log(animal.bark());
  } else if (animal instanceof Cat) {
    console.log(animal.meow());
  }
}

const myDog = new Dog("Bob");
const myCat = new Cat("Tommy");

petSounds(myDog);
petSounds(myCat);

// Discriminated Union

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

interface Triangle {
  kind: "triangle";
  base: number;
  height: number;
}

type Shape = Circle | Square | Triangle;

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

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius! ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "triangle":
      return 0.5 * shape.base * shape.height;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

console.log(getArea({ kind: "circle", radius: 8 }));
