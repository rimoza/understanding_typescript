// Literal Types
function combine(input1, input2, resultConvertion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConvertion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString().toLocaleUpperCase() + input2.toString();
    }
    // return result;
    if (resultConvertion === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combineAgesLiteral = combine(30, 26, 'as-number');
console.log(combineAgesLiteral);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
var combineNamesLiteral = combine('Ahmed', 'Ali', 'as-text');
console.log(combineNamesLiteral);
