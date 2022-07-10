

//Передача по ссылкe или по значению. Spread - оператор (ES6 - ES9)


//Передача по значению.

let a = 5;
let b = a;

b = 5 + b; 
// console.log(b)

//Передача по ссылкe 
const obj = {
  a: 5, 
  b: 12
};

const copy = obj; 
copy.a = 10;

// console.log(obj)
// console.log(copy)

function copy(mainObj){
  let objCopy = {};

  for (let key in mainObj) {
    objCopy[key] = mainObj[key];
  };
return objCopy;
}


const numbers = {
  a: 2,
  b: 4,
  c: {
    x: 7,
    z: 132
  }
}

const newNumbers = copy(numbers);

newNumbers.a = 19;

// console.log(numbers);
// console.log(newNumbers);


const add = {
  d: 17,
  e: 20
};
 
// console.log(Object.assign({}, add));


const oldArr = [1, 2, 3];
const newArr = oldArr.slice();

newArr[1] = 'lol';

// console.log(oldArr);
// console.log(newArr);

const video = ['youtube', 'rutube'],
      blogs = ['blogger', 'lifejournal'],
      internet = [...video,...blogs, 'vk', 'facebook'];

console.log(internet);


 const object = {
   one: 1,
   two: 2
 }

 const q = {...object};
 q.three = 3;
 
 console.log(object)
