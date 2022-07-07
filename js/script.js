// Массивы и псевдомассивы

let arr = [1, 2, 3, 4, 5];

for (let i of arr) {
  console.log(i);
}

arr.forEach((item, i, arr) => {
  console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; "));

let arr2 = [123, 122, 32, 4, 31, 234];

function compare(a, b) {
  return a - b;
}

console.log(arr2.sort(compare));
