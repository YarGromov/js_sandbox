'use strict';

1. document.getElementById(""); - получить элемент по id
const box = document.getElementById('box');
console.log(box);

2. document.getElementsByTagName(""); - получить элементы по тегу
const btns = document.getElementsByTagName('button');
console.log(btns)

let btns = document.getElementsByTagName("")[1] - вернет 2-й элемент
или
console.log(btns[1])
3.  const circles = document.getElementsByClassName('circle'); -  получить элемент по Классу
console.log(circles)

4. const hearts = document.querySelectorAll('.heart'); - получить элемент по селектору css

hearts.forEach(item => {
    console.log(item)
})
Поддерживает метод forEach()

5. const oneHeart = document.querySelector('.heart'); - получить один элемент со страницы(первый искомый)
console.log(oneHeart)