// const person :{
//     name:string;
//     age:number;
// } ={
    const person ={
    name:'Ridwan Mohammed',
    age: 25
}

//console.log(person.firstName)  // Property 'firstName' does not exist on type '{ name: string; age: number; }'.
console.log(person.name);

// Arrays Types [1,2,3]

//Any JavaScript array, type can be flexible or strict (regarding the element types).

const person1 ={
    name:'Ridwan Mohammed',
    age: 25,
    hobbies: ['cooking', 'playing'], // hobbies: string[]
}

let favoriteActivities: string[];
// favoriteActivities = 'playing' => Type 'string' is not assignable to type 'string[]'.
// favoriteActivities = ['Playing', 1]  =>Type 'number' is not assignable to type 'string'. you can solve by changing type of array into 'any'.
favoriteActivities = ['Playing', 'Reading']

for (const hobby of person1.hobbies){
    // console.log(hobby)
    console.log(hobby.toUpperCase()); // because hobby type is string it's a part of array of string
    // console.log(hobby.map()) =>Property 'map' does not exist on type 'string'.
}

console.log(person1.name);

// Working with Tuples

const person2:{
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name:'Ridwan Mohammed',
    age: 25,
    hobbies: ['cooking', 'playing'], // hobbies: string[]
    role: [1, 'author']
};

person2.role.push(1, 'admin')
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

enum Direction  {
    Up = 1,
    Down,
    Left,
    Right
}

/**
 * Above, we have a numeric enum where Up is initialized with 1. All of the following members are auto-incremented from that point on. In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.

If we wanted, we could leave off the initializers entirely:
 */

enum Direction1 {
    Up,
    Down,
    Left,
    Right
};

// String enums
enum Direction2 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }
enum Role {ADMIN, USER_READ, AUTHOR}
const person3= {
    name:'Ridwan Mohammed',
    age: 25,
    hobbies: ['cooking', 'playing'], // hobbies: string[]
    role: Role.ADMIN
};

if(person3.role === Role.AUTHOR){
    console.log('Is admin')
};
