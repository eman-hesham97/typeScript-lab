// // Try the following Typescript features:
// // a.	Types annotation 
// var myAge: number = 25;
// var myName: string = "eman";
// var isUpdated: boolean = true;
// // ----------------------------------------------------------------------------------------
// // union types
// let myId: string | number;
// myId = 1;
// myId = "ID";
// // ----------------------------------------------------------------------------------------
// // b.	Function with typed arguments and return type.
// var testFn = function() { 
//     return "eman";  
//  } 
//  console.log(testFn())
// // ----------------------------------------------------------------------------------------
// // c.	Function overriding
// class Parent {
//     tst(a: number, b: number): number {
//       console.log(`result is: ${a + b}`);
//       return a + b;
//     }
//   }
  
//   class Child extends Parent {
//     tst(a: number, b: number): number {
//       console.log(`result is ${a * b}`);
//       super.tst(a, b);
//       return a * b;
//     }
//   }
  
//   const child1 = new Child();
//   child1.tst(10, 10);
// // ----------------------------------------------------------------------------------------
// // d.	Interfaces & classes & inheritance
// // done in class.ts
// // ----------------------------------------------------------------------------------------
// // e.	Generics
// function getItems<T>(items : T[] ) : T[] {  
//     return new Array<T>().concat(items);  
// }  
// let arrNumber = getItems<number>([10, 20, 30]);  
// let arrString = getItems<string>(["Hello", "world"]);  
// arrNumber.push(40); 
// arrString.push("eman");
// console.log(arrNumber);  
// console.log(arrString);  
// // ----------------------------------------------------------------------------------------
// // f.	Enums
// enum Season {  
//     summer,  
//     winter,  
//     fall,  
//     spring,  
// }  
  
// console.log(Season);  
// // =======================
// enum seasonStatus {  
//     summer = 'SUMMER',  
//     winter = 'WINTER',  
//     fall = 'FALL',  
//     spring = 'SPRING'  
// }  
// function checkStatus(status: seasonStatus): void {  
   
//     console.log(status);  
// }  
// checkStatus(seasonStatus.summer); 