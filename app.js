"use strict";
function addNumbers(n1, n2) {
    return n1 + n2;
}
;
function printResult(result) {
    console.log('Result:' + result);
}
printResult(addNumbers(4, 6));
// FUnctions as types
//  let combineFunctions: Function; but the problem is that only recognizes that's a function
let combineFunctions;
combineFunctions = addNumbers;
//  combineFunctions = 5; Type script doesn't recognize and produces undefined //Function Return Types & "void"
//  combineFunctions = printResult;  We get unexpected result 
/* combineFunctions = printResult; Type '(result: number) => void' is not assignable to type '(a: number, b: number) => number'.
  Type 'void' is not assignable to type 'number'.
  */
console.log(combineFunctions(8, 16));
