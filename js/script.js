// ЦИКЛЫ

// WHILE
let num = 50;

while (num <= 55) {
  console.log(num);
  num++;
}

// DO - WHILE

do {
  console.log(num);
  num++;
} while (num <= 55);

// FOR

for (let i = 0; i <= 10; i++) {
  if (i === 6) {
    continue;
  } else if (i === 9) {
    break;
  }
  console.log(i);
}
