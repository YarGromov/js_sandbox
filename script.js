"use strict"

// const str = prompt('', '');
// const products = str.split(',')
// products.sort();
// console.log(products.join('!'))
// let arr = [122, 31, 12, 5, 34 ,64 ,322];
// let sorti = (a, b) => a - b
// console.log(arr.sort(sorti))
let arr = [1, 2, 3, 4, 5];
arr.push(14)
console.log(arr)

let arr = [1, 2, 3, 4, 5];
arr.pop()
console.log(arr)

let arr = [1, 2, 3, 4, 5];
arr.shift()
console.log(arr)

let arr = [1, 2, 3, 4, 5];
arr.unshift(0)
console.log(arr)

let arr = [1, 2, 3, 4, 5];
for (let val of arr) {
    console.log(val)
}
1
2
3
4
5

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
1
2
3
4
5

let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 'two, three')
console.log(arr)
    [ 1, 'two, three', 4, 5 ]

let arr = [1, 2, 3, 4, 5];
let arr2 = arr.slice(0, 3)
console.log(arr2)
    [ 1, 2, 3 ]

let arr = [1, 2, 3, 4, 5];
let arr2 = arr.concat('new element')
console.log(arr2)
    [ 1, 2, 3, 4, 5, 'new element' ]

let arr = [1, 2, 3, 4, 5];
let arr2 = arr.forEach((item, id, arr) => {
    console.log(`${item} имеет позицию ${id} в массиве ${arr}`)
})
console.log(arr2)
1 имеет позицию 0 в массиве 1,2,3,4,5
2 имеет позицию 1 в массиве 1,2,3,4,5
3 имеет позицию 2 в массиве 1,2,3,4,5
4 имеет позицию 3 в массиве 1,2,3,4,5
5 имеет позицию 4 в массиве 1,2,3,4,5

let arr = [1, 2, 3, 4, 5];
let lol = arr.indexOf(4, 0);
console.log(lol)
  3

let arr = [1, 2, 3, 4, 5];
let lol = arr.includes(4, 0);
console.log(lol)
  true

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];
let lol = users.find(item => item.name == 'Петя')
console.log(lol)
{ id: 2, name: 'Петя' }

let arr = [1, 2, 3, 4, 5, 'Node.js'];
let lol = arr.findIndex(item => item == 'Node.js');
console.log(lol)
5

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];
let lol = users.filter(item => item.id > 1)
console.log(lol)
    [ { id: 2, name: 'Петя' }, { id: 3, name: 'Маша' } ]

let arr = [1, 2, 3, 4, 5, 'Node.js'];
let lol = arr.map(item => item * 2);
console.log(lol)
    [ 2, 4, 6, 8, 10, NaN ]

let arr = [1, 2, 3, 4, 5, 44, 23, 31 ,12 ,332];
let sorti = (a, b) => a - b;
let arr2 = arr.sort(sorti)
console.log(arr2)
    [
    1,  2,  3,  4,   5,
        12, 23, 31, 44, 332
    ]

let arr = [1, 2, 3, 4, 5, 44, 23, 31 ,12 ,332];
let arr2 = arr.reverse()
console.log(arr2)
    [
    332, 12, 31, 23, 44,
        5,  4,  3,  2,  1
    ]

let arr = 'Features Careers Blog Pricing Jam';
console.log(arr.split(' '))
    [ 'Features', 'Careers', 'Blog', 'Pricing', 'Jam' ]

let arr = [ 'Features', 'Careers', 'Blog', 'Pricing', 'Jam' ];
console.log(arr.join(', '))
   Features, Careers, Blog, Pricing, Jam

let arr = [1, 2, 3, 4, 5];
let arr2 = arr.reduce((sum, current) => sum + current)
console.log(arr2)
  15

let arr = [1, 2, 3, 4, 5];
let arr2 = arr.reduceRight((sum, current) => sum + current)
console.log(arr2)
 15

let arr = [1, 2, 3, 4, 5];
console.log(Array.isArray(arr))
  true
