'use strict';

Навигация по DOM-элементам, data-атрибуты, преимущества for/of

console.dir(document.body.childNodes)
Получить дочерние узлы body

console.dir(document.body.firstChild)
Получить первый дочерний узел
console.dir(document.body.lastChild)
Получить последний дочерний узел

console.log(document.querySelector('#current').parentNode);
Получить родительский узел

 console.log(document.querySelector('#current').parentNode.parentNode);
Получить родителя родителя

console.log(document.querySelector('[data-current="3"]'));
Получить элемент с  data-атрибутом

console.log(document.querySelector('[data-current="3"]').nextSibling);
Получить следующего соседа

console.log(document.querySelector('[data-current="3"]').previousSibling);
Получить предыдущего соседа

console.log(document.querySelector('[data-current="3"]').nextElementSibling);
Получить следующий элемент

console.log(document.querySelector('[data-current="3"]').previousElementSibling);
Получить предыдущий элемент

console.log(document.querySelector('#current').parentElement);
Получить родительский элемент

console.log(document.body.firstElementChild)
Получить первый дочерний ЭЛЕМЕНТ

console.log(document.body.lastElementChild)
Получить последний дочерний ЭЛЕМЕНТ

 for (let node of document.body.childNodes) {
     if (node.nodeName == '#text') {
         continue;
     }
     console.log(node)
 }
 Перебрать дочерние узлы body и вывести только Элементы












