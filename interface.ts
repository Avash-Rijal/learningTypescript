interface User {
  name: string;
  age: number;
  gmail?: string;
  couponDiscount(couponname: string): number;
}

interface TakePicture {
  cameraMode: string;
  saturation: number;
  contrast: number;
}

class Instagram implements TakePicture {
  constructor(
    public cameraMode: string,
    public saturation: number,
    public contrast: number
  ) {}
}

const newapplication = new Instagram("selfie", 24, 22);

console.log(newapplication);

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
