'use strict';

          //СОБЫТИЯ И ИХ ОБРАБОТЧИКИ

//В HTML
// <button onClick="alert('Click')" id="btn">Нажми на меня</button>

// В JavaScript
const btns = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay')
//
// btn.onclick = function () {
//     alert('LOOOOL');
// }
// Данный способ нельзя перезаписать

           //addEventListener
// btn.addEventListener('click', () => {
//     alert('Произошло нажатие');
// });
//
// btn.addEventListener('click', () => {
//     alert('Произошло зачатие');
// });
//Можно дублировать. Выполнит все варианты.

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e);
// });
// Можно задать любое событие
//Аргументом коллбек функции можно задать event(событие), покажет произошедшее событие

// btn.addEventListener('click', (e) => {
//     e.target.remove();
// });


// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     i++;
//     if (i == 1) {
//         btn.removeEventListener('click', deleteElement);
//     }
// };
// btn.addEventListener('click', deleteElement);

// let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement)
})

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();
    //Помещается в самом начале обработчика событий. ОТМЕНЯЕТ СОБЫТИЕ
    console.log(event.target)
    //Затем задаем свое событие
});














