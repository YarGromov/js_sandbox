// УСЛОВИЯ if - else

const num = 50; 

if (num < 49) {
  console.log('Error!')
} else if(num > 100) {
  console.log('Слишком много')
} else {
  console.log('Ok!')
}

// ТЕРНАРНЫЙ ОПЕРАТОР

const num2 = 51; 

(num2 === 50) ? console.log('Ok!') : console.log('Error!')

// SWITCH  проверка на строгое соответствие 

const num3 = 153;

switch(num3) {
  case 51:
    console.log('Мало');
    break;
  case 52:
    console.log('Мало');
    break;
  case 53:
    console.log('В точку');
    break;
  case 54:
    console.log('Много');
    break;
  default:
    console.log('Не в этот раз!');
    break;
}

