// Union Types
function combine(input1, input2) {
    // const result = input1 + input2 Operator '+' cannot be applied to types 'string | number' and 'string | number'.
    // to avoid the above error use type check logic
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(30, 26);
console.log(combineAges);
var combineNames = combine('Ridwan', 'Mohamed');
console.log(combineNames);
