function apply(operation, ...args) {

  return operation(...args)
}

function sum(a, b, c) {
  return a + b + c;
}

function discount(disc, value) {
  return value - ((disc / 100) * value);
}

const productPrice = apply(sum, 200, 100, 200); // fungsi apply yang menerima 
const withDiscount = apply(discount, 25, productPrice);

console.log('Product price:', productPrice); // Output: Product price: 400
console.log('With discount 25%:', withDiscount); // Output: With discount 25%: 300

//Array Method HOF

function arrayMap() {
  let arr = [1, 2, 3, 4]

  return arr.map(num => num * 2)
}

function arrayFilter() {
  let arr = [1, 2, 3, 4]

  return arr.filter(num => num % 2 == 0)
}

function arrayReduce() {
  let arr = [1, 2, 3, 4]

  return arr.reduce((acc, num) => acc + num, 0)
}

console.log(arrayMap())
console.log(arrayFilter())
console.log(arrayReduce())

function higherOrderFunction(callback) {

  const result = callback();

  return result;
}

function simpleCallback() {
  return "Hello from callback!";
}

higherOrderFunction(simpleCallback); // "Hello from callback"