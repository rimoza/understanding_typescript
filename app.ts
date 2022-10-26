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
console.log(combineNames)