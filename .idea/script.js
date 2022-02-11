const btn = document.querySelector('.btn');
let timeId;
let i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
btn.addEventListener('click', myAnimation);
//
// function logger () {
//     if (i === 2) {
//         clearInterval(timeId);
//     }
//     console.log('lol');
//     i++;
// }
// let id = setTimeout(function log(){
//     console.log('Huylo');
//     id = setTimeout(log, 500);
// }, 500);
















