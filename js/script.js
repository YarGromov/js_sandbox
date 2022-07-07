// Объекты, деструктуризация объектов (ES6)

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function(){
    console.log('Test'); 
  }
};

console.log(options['colors']['border'])
// 
// delete options.name;

// console.log(options)

let counter = 0;

for (let key in options){
  if(typeof (options[key]) === 'object') {
    for (let i in options[key]){
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
    } 
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`)
    counter++;
  }
}
console.log(counter)


console.log(Object.keys(options));
console.log(Object.keys(options).length);

options.makeTest()

console.log(options.makeTest())

// Деструктуризация 
 
const {border, bg} = options.colors;
console.log(border, bg);
