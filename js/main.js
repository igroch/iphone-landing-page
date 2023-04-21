const nav = document.querySelector('.nav');
const btn = document.querySelector('.menu-btn');

btn.addEventListener('click', function () {
    nav.classList.toggle('menu-open')
});