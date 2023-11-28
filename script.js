/*
    Faites-en sorte que le cercle suive votre souris.
    Le pointeur de votre souris doit se trouver 
    parfaitement au milieu du cercle.
*/
const cercle = document.querySelector('.circle');

document.addEventListener('mousemove', function (event) {
    const x = event.clientX - cercle.clientWidth / 2;
    const y = event.clientY - cercle.clientHeight / 2;
    cercle.style.left = x + 'px';
    cercle.style.top = y + 'px';
});
