function indentity<T>(val: T): T {
  return val;
}

interface User {
  name: string;
  class: number;
}

console.log(indentity<User>({ name: "Rahul", class: 1 }).name);

const getSearchResults = <T>(results: T[]): T => {
  const requiredIndex = 3;
  return results[requiredIndex];
};

const myarray = ["mango", "banana", "apple", "orange"];

console.log(getSearchResults(myarray));

interface Database {
  userName: string;
  connection: string;
  password: string;
}

function newFunc<T, U extends Database>(valueOne: T, valueTwo: U): object {
  return {
    valueOne,
    valueTwo,
  };
}

console.log(
  newFunc(4, {
    userName: "Fruit328",
    connection: "Random",
    password: "protected",
  })
);
