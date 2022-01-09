"use strict"

let a = 5;
let b = a;

b = b + 5;

console.log(a)

const obj = {
    a: 5,
    b: 1
}
const copy = obj; // КОПИРУЯ ОБЪЕКТ, КОПИРУЕШЬ ССЫЛКУ


copy.a = 10;
console.log(obj)
console.log(copy)
                        //ПОВЕРХНОСТНАЯ КОПИЯ ОБЪЕКТА
function copy(mainObj) {
    let objCopy = {}
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key]
    }
    return objCopy;
}
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
console.log(newNumbers)  // { a: 10, b: 5, c: { x: 7, y: 4 } }
console.log(numbers)     // { a: 2, b: 5, c: { x: 7, y: 4 } }

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const add = {
    d: 17,
    e: 20
};
let arr = Object.assign(numbers, add)
console.log(arr)

let app = Object.assign({}, add)
app.d = 24;
console.log(add)
console.log(app)

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

                  Spread Operator
const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video,...blogs, 'vk', 'facebook'];
console.log(internet)
           Spread Operator with function
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];

log(...num)

const array = ['a', 'b'];

const newArray = [...array]

const q = {
    one: 1,
    two: 2
}
const newObj = {...q}
console.log(newObj)