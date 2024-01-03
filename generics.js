function indentity(val) {
    return val;
}
console.log(indentity({ name: "Rahul", class: 1 }).name);
var getSearchResults = function (results) {
    var requiredIndex = 3;
    return results[requiredIndex];
};
var myarray = ["mango", "banana", "apple", "orange"];
console.log(getSearchResults(myarray));
function newFunc(valueOne, valueTwo) {
    return {
        valueOne: valueOne,
        valueTwo: valueTwo,
    };
}
console.log(newFunc(4, {
    userName: "Fruit328",
    connection: "Random",
    password: "protected",
}).valueTwo.userName);
