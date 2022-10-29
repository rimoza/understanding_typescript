"use strict";
function combine(input1, input2) {
    // const result = input1 + input2 Operator '+' cannot be applied to types 'string | number' and 'string | number'.
    // to avoid the above error use type check logic
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combineAges = combine(30, 26);
console.log(combineAges);
const combineNames = combine('Ridwan', 'Mohamed');
console.log(combineNames);
const u1 = {
    name: 'Ridwan',
    age: 24
};
//This allows you to avoid unnecessary repetition and manage types centrally.
// For example, you can simplify this code:
function greet(user) {
    console.log('Hi, I am' + user.name);
}
;
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
function greetSimple(user) {
    console.log('Hi I am simple' + user.name);
}
;
function greetOlder(user, checkAge) {
    return checkAge > user.age;
}
;
