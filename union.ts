// Union Types

function combineFunction (input1: number | string, input2: number | string){
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

const combineAges = combineFunction(30, 26);
console.log(combineAges);

const combineNames = combineFunction('Ridwan', 'Mohamed');
console.log(combineNames)