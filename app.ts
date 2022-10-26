 function add(n1: number, n2: number){
    return n1 +n2;
 };

 function printResult(result: number): void{
    console.log('Result:' +result);
 }

 printResult(add(4,6));

 // FUnctions as types

//  let combineFunctions: Function; but the problem is that only recognizes that's a function
let combineFunctions: (a: number, b: number) => number
 combineFunctions = add;

//  combineFunctions = 5; Type script doesn't recognize and produces undefined //Function Return Types & "void"

//  combineFunctions = printResult;  We get unexpected result 
/* combineFunctions = printResult; Type '(result: number) => void' is not assignable to type '(a: number, b: number) => number'.
  Type 'void' is not assignable to type 'number'.
  */
 
 console.log(combineFunctions(8,8))