interface User {
  name: string;
  age: number;
  gmail?: string;
  couponDiscount(couponname: string): number;
}

interface Admin extends User {
  role: "admin" | "student" | "moderator";
}

const user: Admin = {
  name: "Mark",
  age: 22,
  couponDiscount: (couponname: "promocode") => {
    return 10;
  },
  role: "admin",
};

console.log(user);
