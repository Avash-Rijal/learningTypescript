var Instagram = /** @class */ (function () {
    function Instagram(cameraMode, saturation, contrast) {
        this.cameraMode = cameraMode;
        this.saturation = saturation;
        this.contrast = contrast;
    }
    return Instagram;
}());
var newapplication = new Instagram("selfie", 24, 22);
console.log(newapplication);
var user = {
    name: "Mark",
    age: 22,
    couponDiscount: function (couponname) {
        return 10;
    },
    role: "admin",
};
console.log(user);
