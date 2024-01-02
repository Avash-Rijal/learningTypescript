"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myname = "My name";
const mynum = 54565.34;
mynum.toFixed();
myname.toLocaleLowerCase();
console.log(myname);
function showname(name) {
    return name;
}
let handleError = (errormsg) => {
    throw new Error(errormsg);
};
handleError("HEHE ERRORRRRR");
showname("DELL");
