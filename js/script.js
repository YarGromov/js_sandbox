let num = 20;

function showFirstMessage(text) {
  console.log(text);
  let num = 10;
  console.log(num);
}
showFirstMessage("Hello World!");
console.log(num);

function calc(a, b) {
  return a + b;
}
console.log(calc(1, 5));
console.log(calc(3, 5));
console.log(calc(1, 51));

function ret() {
  let num = 51;

  // Code

  return num;
}

const newNum = ret();
console.log(newNum);

const logger = function () {
  console.log("Hello function expression!");
};
logger();

const calc2 = (a, b) => a + b;
console.log(calc2(5, 50));
