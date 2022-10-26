// Union Types
 // type alianses
 type Combinable = string | number;
 type Convertible = 'as-number' | 'as-text'
function combine (input1: Combinable, input2: Combinable){
    // const result = input1 + input2 Operator '+' cannot be applied to types 'string | number' and 'string | number'.
    // to avoid the above error use type check logic
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
     result = input1 + input2
    } else {
      result =  input1.toString() + input2.toString()
    }
    return result
}

const combineAges = combine(30, 26);

console.log(combineAges);

const combineNames = combine('Ridwan', 'Mohamed');
console.log(combineNames);

// Type Aliases & Object Types

// Type alianses can be used to "create" your own types. You're not limited to storing union types through 
// -You can also provide an alias to a (possible complex) object type.
// For example 
type UserEx = {
    name: string,
    age: number
};
const u1: UserEx = {
    name:  'Ridwan',
    age: 24
}; 

//This allows you to avoid unnecessary repetition and manage types centrally.


// For example, you can simplify this code:

function greet(user: {name: string, age: number}){
 console.log('Hi, I am' + user.name);
};

function isOlder(user: {name: string, age: number}, checkAge: number){
    return checkAge > user.age;
}
//To

type User = {name: string, age: number};

function greetSimple(user: User){
    console.log('Hi I am simple' + user.name);
};
function greetOlder(user: User, checkAge: number) {
    return checkAge > user.age;
  }; 
