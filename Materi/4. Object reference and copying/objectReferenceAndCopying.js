const obj1 = { name: "Alice" };
const obj2 = obj1; // obj2 mereferensikan objek yang sama dengan obj1

obj2.name = "Bob"; // Mengubah nama di obj2 juga mengubah obj1

console.log(obj1.name); // Output: Bob

