"use strict";
// class User {
//   readonly city: string;
//   constructor(
//     public email: string,
//     public age: number,
//     public phone: number,
//     city: string
//   ) {
//     this.email = email;
//     this.age = age;
//     this.phone = phone;
//     this.city = city;
//   }
// }
// const Raj = new User("raj@gmail.com", 43, 987654321, "Kathmandu");
// console.log(Raj);
class Student {
    constructor(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
const user = new Student("Bob", "M", "Kenctucky");
console.log(user);
