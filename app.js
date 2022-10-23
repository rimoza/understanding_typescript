// const person :{
//     name:string;
//     age:number;
// } ={
var person = {
    name: 'Ridwan Mohammed',
    age: 25
};
//console.log(person.firstName)  // Property 'firstName' does not exist on type '{ name: string; age: number; }'.
console.log(person.name);
// Arrays Types [1,2,3]
//Any JavaScript array, type can be flexible or strict (regarding the element types).
var person1 = {
    name: 'Ridwan Mohammed',
    age: 25,
    hobbies: ['cooking', 'playing']
};
var favoriteActivities;
// favoriteActivities = 'playing' => Type 'string' is not assignable to type 'string[]'.
// favoriteActivities = ['Playing', 1]  =>Type 'number' is not assignable to type 'string'. you can solve by changing type of array into 'any'.
favoriteActivities = ['Playing', 'Reading'];
for (var _i = 0, _a = person1.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    // console.log(hobby)
    console.log(hobby.toUpperCase()); // because hobby type is string it's a part of array of string
    // console.log(hobby.map()) =>Property 'map' does not exist on type 'string'.
}
console.log(person1.name);
