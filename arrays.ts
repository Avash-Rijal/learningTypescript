const listOfNams: string[] = ["John", "kentucky"];
console.log(listOfNams);

type User = {
  name: string;
  isPaid: boolean;
};

const listOfUsers: User[] = [];

listOfUsers.push({ name: "Dell", isPaid: true });

console.log(listOfUsers);

const rollNumbers: Array<number> = [];
rollNumbers.push(3);
console.log(rollNumbers);

const coordinates: number[][] = [
  [3.45, 4.55, 33.34],
  [3.42, 4.57, 33.37],
];

console.log(coordinates);

export {};
