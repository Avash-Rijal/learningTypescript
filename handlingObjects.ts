const userDetails = ({ name: string, isPaid: boolean }) => {
  if (this.isPaid === true) {
    console.log("yes it is");
  }
};

userDetails({ name: "John", isPaid: false });

function courseDetails(details): { name: string; description: string } {
  return details;
}

const details = { name: "MBA", description: "Learn Business" };

courseDetails(details);

function clientDetails({ name: string, age: number }) {
  return this.name;
}

const theDetails = { name: "Raj", age: 23 };
clientDetails(theDetails);
