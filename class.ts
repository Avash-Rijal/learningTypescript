class User {
  readonly city: string;
  constructor(
    public email: string,
    public age: number,
    public phone: number,
    city: string
  ) {
    this.email = email;
    this.age = age;
    this.phone = phone;
    this.city = city;
  }
}

const Raj = new User("raj@gmail.com", 43, 987654321, "Kathmandu");

console.log(Raj);

class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleName: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleName + " " + lastName;
  }

  protected _courseCount = 0;

  get courseCountNum(): number {
    return this._courseCount;
  }

  set courseCountNum(courseCountNumber: number) {
    if (courseCountNumber <= 1) {
      throw new Error("Cannot be less than 1");
    }
    this._courseCount = courseCountNumber;
  }
}

class NewStudent extends Student {
  changeCoursrCount() {
    this._courseCount = 4;
  }
}

interface User {
  firstName: string;
  lastName: string;
}

function greeter(person: User): string {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Bob", "M", "Kenctucky");

console.log(greeter(user));

abstract class School {
  constructor(
    public name: string,
    public established_date: number,
    public level: string
  ) {}

  abstract getName(): string;

  complexCalculations(): number {
    // Some comples calculations.
    return 32;
  }
}

class Patshala extends School {
  constructor(
    public name: string,
    public established_date: number,
    public level: string,
    public classes: number
  ) {
    super(name, established_date, level);
  }

  getName(): string {
    return "yes it does";
  }
}

const newSchool = new Patshala("Patshala", 1995, "Secondary", 12);

console.log(newSchool.name);
