'use strict';

// СОБЫТИЯ НА МОБИЛЬНОМ БРАУЗЕРЕ

// touchstart - событие срабатывает при касании к элементу
// touchmove - при движении пальца по элементу
// touchend - при отрыве пальца от элемента
// touchenter - при ведении пальца по экрану и попадании на элемент с событием
// touchleave - при прекращении ведения пальца по событию, но при ведении дальше по экрану
// touchcancel - точка соприкосновения не регистрируется на поверхности( палец выходит за пределы)

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start!');
        console.log(e.changedTouches);
    });
});
//
window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
    });
});
//
// window.addEventListener('DOMContentLoaded', () => {
//     const box = document.querySelector('.box');
//     box.addEventListener('touchend', (e) => {
//         e.preventDefault();
//         console.log('End!');
//     });
// });

// touches - выдает список всех пальцев, которые сейчас взаимодействуют с экраном
// targetTouches - пальцы, которые взаимодействуют именно с элмементом
// changedTouches - пальцы, которые участвуют в текущем событии(совершили событие)
// e.targetTouches[0].pageX - выведет координаты области нажатия













