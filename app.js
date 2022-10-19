//Using types 
//number => All types of number are same float, decimal and so on
//string
//boolean => there is no truthy and falsy types.
function add(num1, num2) {
    return num1 + num2;
}
// const number1 = '5'; Argument of type 'string' is not assignable to parameter of type 'number'
var number1 = 5;
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
