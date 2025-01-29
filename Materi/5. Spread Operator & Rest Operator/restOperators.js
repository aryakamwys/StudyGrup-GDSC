// 1. Destructuring dengan Rest Parameter pada Array  
const [first, ...restArray] = [1, 2, 3, 4];  
console.log(first); // Output: 1  
console.log(restArray); // Output: [2, 3, 4]  
  
// 2. Destructuring dengan Rest Parameter pada Objek  
const { a, ...restObject } = { a: 1, b: 2, c: 3, d: 4 };  
console.log(a);    // Output: 1  
console.log(restObject); // Output: { b: 2, c: 3, d: 4 }  
  
// 3. Rest Parameter dalam Fungsi  
function sumAll(...numbers) {  
  return numbers.reduce((acc, val) => acc + val, 0);  
}  
console.log(sumAll(1, 2, 3, 4, 5, 6)); // Output: 21  