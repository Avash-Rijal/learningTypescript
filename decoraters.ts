function funcName(constructor: Function): void {
  console.log("IBM");
  console.log(constructor);
}

@funcName
class Person {
  name = "John";
  constructor() {
    console.log(`Hi! ${this.name}`);
  }
}
