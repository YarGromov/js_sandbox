'use strict';

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');


// console.log(btns[0].classList.length);
//Выведет КОЛИЧЕСТВО КЛАССОВ у элемента btns[0]

// console.log(btns[0].classList.item(0));
//Позволяет получить class под индексом 0 элемента btns[0]

// console.log(btns[1].classList.add('red'));
//Добавить класс 'red' элементу 'btns[1]'.Можно добавить несколько классов через запятую

// console.log(btns[0].classList.remove('blue'));
//Удалить класс 'blue'. Можно удалить несколько классов через запятую

// console.log(btns[0].classList.toggle('blue'));
//Добавит класс, если его не было. Удалит класс, если он был

// if (btns[1].classList.contains('red')) {
//     console.log('looool red')
// }
// Позволяет проверить наличие определенного класса у опред. элемента

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red')
    // }
    btns[1].classList.toggle('red');
})
// console.log(btns[0].className)

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.red')) {
        console.log('Hello!!')
    }
});

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello!')
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);








