'use strict';

// Действия с элементами на странице
const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');


1) box.style.backgroundColor = 'blue';
Чтобы изменить стили объектов, надо использовать св-во style


2) circles[0].style.backgroundColor = 'red';
Чтобы стили конкретного элемента псевдамассива, надо обратиться к элементу по его индексу

3)box.style.cssText = 'background-color: blue; width: 500px';
Чтобы задать СРАЗУ НЕСКОЛЬКО стилей объекту, надо использовать св-во cssText

4) for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}
Перебрать элементы массива ЦИКЛОМ и каждому поменять стили

5) hearts.forEach(item => {
    item.style.backgroundColor = 'green';
})
Перебрать элементы массива МЕТОДОМ forEach() и каждому поменять стили

6) const div = document.createElement('div');
Создать элемент c тегом, указанным в аргументе
Тег создается только внутри файла JS

7) const text = document.createTextNode('Тут был я');
Создать текстовый узел без оболочки тега

8) div.classList.add('black');
Добавить класс black элементу div

9) document.body.append(div);
Добавить элемент div внутрь элемента body

10) document.querySelector('.wrapper').append(div);
Получить элемент с классом .wrapper и добавить туда div В КОНЕЦ

11) wrapper.prepend(div);
Добавить элемент div в НАЧАЛО элемента wrapper

12) hearts[0].before(div)
Добавить элемент div ПЕРЕД элементом hearts[0]

13) hearts[0].after(div)
Добавить элемент div ПОСЛЕ элемента hearts[0]

14) circles[0].remove();
Удалить элемент circles[0] со страницы

15) hearts[0].replaceWith(circles[0]);
Заменить элемент  hearts[0] на элемент circles[0]

   // РЕДАКАТИРОВАНИЕ ЭЛЕМЕНТОВ

1) div.innerHTML = 'Hello World!';
Вставить текст 'Hello World!' в элемент div
 МОЖНО ВСТАВЛЯТЬ В ТЕГАХ
div.innerHTML = '<h1>Hello World!</h1>';

2) div.textContent = 'Hello';
Вставить только текст 'Hello' в элемент div, БЕЗ ТЕГОВ

3) div.insertAdjacentHTML('afterend', '<h2>helllo</h2>');
beforebegin - вставить html перед элементом div
afterbegin - вставить html в начало элемента div
beforeend - вставить html в конец элемента div
afterend - вставить html после элемента div

