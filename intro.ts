let myname: string = "My name";

const mynum = 54565.34;
mynum.toFixed();
myname.toLocaleLowerCase();
console.log(myname);

function showname(name: string): string {
  return name;
}

let handleError = (errormsg: string): never => {
  throw new Error(errormsg);
};

handleError("HEHE ERRORRRRR");

showname("DELL");

export {};
