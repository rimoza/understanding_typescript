//Using types 
//number => All types of number are same float, decimal and so on
//string
//boolean => there is no truthy and falsy types.
function add(num1, num2) {
    return num1 + num2;
}
// const number1 = '5'; Argument of type 'string' is not assignable to parameter of type 'number'
var number1 = 5; //5.0 
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
//JavaScript is a dynamic type (resolved at runtime) while Typescript is a static type (set during development).
//Important: Type Casing
// In TypeScript, you work with types like "string", or "number" all times.
//Important =: It is "string" and "number"(etc), NOT "String" and "Number" etc.
//The core primitive types in TypeScript are all "lowercase!"
// Working with Numbers, Strings and Booleans.
function addNum(n1, n2, showSum, phrase) {
    var result = n1 + n2;
    if (showSum) {
        // console.log(phrase + n1 + n2) produce 410 b/c it become strings
        // console.log(phrase + result)
        console.log("".concat(phrase, "  ").concat(n1 + n2));
    }
    else {
        // return result
        return n1 + n2;
    }
}
var numberOne = 4;
var numberTwo = 10;
var printSum = true;
var phraseResult = 'Result is: ';
//  const sum = addNum(numberOne,numberTwo, printSum); we don't need b/c of boolean value
//  console.log(sum);
addNum(numberOne, numberTwo, printSum, phraseResult);
