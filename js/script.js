//Аргументы функций 

// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//   console.log(amount * curr);
// } 
// convert(1000, usdCurr)
// convert(1000, eurCurr)

// Про важность return 

const discount = 0.9;
const usdCurr = 28;

function convert(amount, curr) {
  return amount * curr;
} 

function promotion(result) {
  console.log(result * discount)
}

const res = convert(500, usdCurr);

promotion(res);


function test(){
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if ( i === 3) return;
  }
}
test()

// Под капотом любая функция возвращает undefined 
function doNothing() {};
console.log(doNothing() === undefined);
