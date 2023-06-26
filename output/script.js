"use strict";
// let yourname: string = "saheb ali";
// let myName: string = "Alice";
// console.log(yourname)
// console.log(myName)
// // Downleveling
// function greet(person:string, date:any) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
//   };
// console.log(greet("Maddison", new Date()))  
// function getFavoriteNumber(): number {
//     return 26;
//   }
// const names = ["Alice", "Bob", "Eve"];
// // Contextual typing for function - parameter s inferred to have type string
// names.forEach(function (s) {
//   console.log(s.toUpperCase());
// });
// // Contextual typing also applies to arrow functions
// names.forEach((s) => {
//   console.log(s.toUpperCase());
// });
// Object Type
// The parameter's type annotation is an object type
// function printCoord(pt: { x: number; y: number }) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
//   }
//   printCoord({ x: 3, y: 7 });
//Optional Parameter type
//   function printName(obj: { first: string; last?: string }) {
//     console.log(`Wellcome ${obj.first} ${" "} ${obj.last && obj.last} our Application`);
//   }
//   // Both OK
//   printName({ first: "Bob" });
//   printName({ first: "Alice", last: "Alisson" });
// console.log(getFavoriteNumber());
function printName(obj) {
    var _a;
    // Error - might crash if 'obj.last' wasn't provided!
    console.log(obj.last);
    //   'obj.last' is possibly 'undefined'.'obj.last' is possibly 'undefined'.
    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }
    // A safe alternative using modern JavaScript syntax:
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
//   console.log(printName( {first: "Alice", last: "Alisson"}));
// function printId(id: number | string) {
//     console.log("Your ID is: " + id);
//   }
//   // OK
//   let p1= printId('dsd23');
//   // OK
//   let p2= printId("202");
//   console.log(p1, p2);
// Error
//   printId({ myID: 22342 });
//   Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.Argument 
// function printId(id: number | string) {
//     const myid =  id;
//     console.log(id.toUpperCase());
// //   Property 'toUpperCase' does not exist on type 'string | number'.
// //     Property 'toUpperCase' does not exist on type 'number'.Property 'toUpperCase' does not exist on type 'string | number'.
// //     Property 'toUpperCase' does not exist on type 'number'.
//   }
// // 
// function printId(id: number | string) {
//     if (typeof id === "string") {
//       // In this branch, id is of type 'string'
//       console.log(id.toUpperCase());
//     } else {
//       // Here, id is of type 'number'
//       console.log('my is ',id);
//     }
//   }
//   console.log(printId(123))
// Another example is to use a function like Array.isArray:
// function welcomePeople(x: string[] | string) {
//   if (Array.isArray(x)) {
//     // Here: 'x' is 'string[]'
//     console.log("Hello, " + x.join(" and "));
//   } else {
//     // Here: 'x' is 'string'
//     console.log("Welcome lone traveler " + x);
//   }
// }
// console.log(welcomePeople('saheb ali'))
// Return type is inferred as number[] | string
// function getFirstThree(x: number[] | string) {
//     return x.slice(0, 3);
//   }
//   console.log(getFirstThree('saheb'))
// Type Aliases
// A type alias is exactly that - a name for any type. The syntax for a type alias is:
// type Point = {
//   x: number;
//   y: number;
// };
// // Exactly the same as the earlier example
// function printCoord(pt: Point) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }
// printCoord({ x: 100, y: 100 });
// type ID = number | string | undefined | boolean;
// type UserInputSanitizedString = string;
// function sanitizeInput(str: string): UserInputSanitizedString {
//   return sanitize(str);
// }
// // Create a sanitized input
// let userInput = sanitizeInput(getInput());
// // Can still be re-assigned with a string though
// userInput = "new input";
// Interface 
// interface Point {
//     x: number;
//     y: number;
//   }
//   function printCoord(pt: Point) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
//   }
//   printCoord({ x: 100, y: 130 });
let x = "hello";
// OK
console.log(typeof (x));
x = "hello";
// ...
x = "hello";
