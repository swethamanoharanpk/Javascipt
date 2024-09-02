
//COPY BY VALUE


/*let x = 20;
let y = x;
x = 30;
console.log(`x----> ${x}`);
console.log(`y---->${y}`);
*/

// COPY BY REFERENCE


/*let arr1 = [10,20];
let arr2 = arr1;
arr1.push(30);
console.log(`arr1--->${arr1}`);
console.log(`arr2--->${arr2}`);*/


// OVERCOME THE ISSUE IN COPY BY REFERENCE
// USING SLICE METHOD

let arr1 = [10, 20];
let arr2 = arr1.slice();
arr1.push(30);
console.log(`arr1--->${arr1}`); 
console.log(`arr2--->${arr2}`);


// SPREAD OPERATOR


/*let arr1 = [10, 20];
let arr2 = [...arr1]; 
arr1.push(30);
console.log(`arr1--->${arr1}`); 
console.log(`arr2--->${arr2}`); 

//USING FORM METHOD

let arr1 = [10, 20];
let arr2 = Array.from(arr1); // Creates a shallow copy
arr1.push(30);
console.log(`arr1--->${arr1}`); // arr1---> [10, 20, 30]
console.log(`arr2--->${arr2}`); // arr2---> [10, 20]*/
