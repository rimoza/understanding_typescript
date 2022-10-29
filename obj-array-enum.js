"use strict";
// const person :{
//     name:string;
//     age:number;
// } ={
const person = {
    name: 'Ridwan Mohammed',
    age: 25
};
//console.log(person.firstName)  // Property 'firstName' does not exist on type '{ name: string; age: number; }'.
console.log(person.name);
// Arrays Types [1,2,3]
//Any JavaScript array, type can be flexible or strict (regarding the element types).
const person1 = {
    name: 'Ridwan Mohammed',
    age: 25,
    hobbies: ['cooking', 'playing'], // hobbies: string[]
};
let favoriteActivities;
// favoriteActivities = 'playing' => Type 'string' is not assignable to type 'string[]'.
// favoriteActivities = ['Playing', 1]  =>Type 'number' is not assignable to type 'string'. you can solve by changing type of array into 'any'.
favoriteActivities = ['Playing', 'Reading'];
for (const hobby of person1.hobbies) {
    // console.log(hobby)
    console.log(hobby.toUpperCase()); // because hobby type is string it's a part of array of string
    // console.log(hobby.map()) =>Property 'map' does not exist on type 'string'.
}
console.log(person1.name);
// Working with Tuples
const person2 = {
    name: 'Ridwan Mohammed',
    age: 25,
    hobbies: ['cooking', 'playing'],
    role: [1, 'author']
};
person2.role.push(1, 'admin');
// person2.role = ['2'] Type 'string' is not assignable to type 'number'.
/* Tuples [1,2] [1, 'hello']
A tuple is a TypeScript type that works like an array with some special considerations:
 The number of elements of the array is fixed.
 The type of the elements is known.
 The type of the elements of the array need not be the same.
*/
// Working with Enums
/*
1. Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
2. Enums allow a developer to define a set of named constants.
3. Using enums can make it easier to document intent(ujeedada).
4. Can make it easier to create a set of distinct cases(cases kala duwan).
5. TypeScript provides both numeric and string-based enums.
6.An enum can be defined using the 'enum' keyword.
*/
//Numeric enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
/**
 * Above, we have a numeric enum where Up is initialized with 1. All of the following members are auto-incremented from that point on. In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.

If we wanted, we could leave off the initializers entirely:
 */
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
;
// String enums
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER_READ"] = 1] = "USER_READ";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person3 = {
    name: 'Ridwan Mohammed',
    age: 25,
    hobbies: ['cooking', 'playing'],
    role: Role.ADMIN
};
if (person3.role === Role.AUTHOR) {
    console.log('Is admin');
}
;
