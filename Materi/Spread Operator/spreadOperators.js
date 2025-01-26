// Contoh penggunaan Spread Operator dan Rest Parameter  
  
// 1. Spread Operator pada Array  
const arr = [1, 2, 3];  
console.log(...arr); // Output: 1 2 3  
  
// 2. Menyalin Array  
const originalArray = [1, 2, 3];  
const copyArray = [...originalArray];  
console.log(copyArray); // Output: [1, 2, 3]  
  
// 3. Menggabungkan Array  
const arr1 = [1, 2, 3];  
const arr2 = [4, 5, 6];  
const combinedArray = [...arr1, ...arr2];  
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]  
  
// 4. Spread Operator pada Objek  
const obj1 = { a: 1, b: 2 };  
const obj2 = { c: 3, d: 4 };  
const combinedObject = { ...obj1, ...obj2 };  
console.log(combinedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }  
  
// 5. Menyalin Objek  
const originalObject = { a: 1, b: 2 };  
const copyObject = { ...originalObject };  
console.log(copyObject); // Output: { a: 1, b: 2 }  
  
// 6. Menggunakan Spread Operator dalam Fungsi  
function sum(a, b, c) {  
  return a + b + c;  
}  
const numbers = [1, 2, 3];  
console.log(sum(...numbers)); // Output: 6  
  
// 7. Destructuring dengan Rest Parameter pada Array  
const [first, ...restArray] = [1, 2, 3, 4];  
console.log(first); // Output: 1  
console.log(restArray); // Output: [2, 3, 4]  
  
// 8. Destructuring dengan Rest Parameter pada Objek  
const { a, ...restObject } = { a: 1, b: 2, c: 3, d: 4 };  
console.log(a);    // Output: 1  
console.log(restObject); // Output: { b: 2, c: 3, d: 4 }  
  
// 9. Rest Parameter dalam Fungsi  
function sumAll(...numbers) {  
  return numbers.reduce((acc, val) => acc + val, 0);  
}  
console.log(sumAll(1, 2, 3, 4, 5, 6)); // Output: 21  
