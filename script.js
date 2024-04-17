var cross = document.querySelector('#cross');
var menu = document.querySelector('#menu');
var menuicon = document.querySelector("#menu-icon")

cross.addEventListener('click', function () {
    menu.style.transform = 'translate(-100%, 100%)'
    menuicon.style.opacity = 1;
})

menuicon.addEventListener('click', function () {
    menu.style.transform = 'translate(0, 0)'
    menuicon.style.opacity = 0;
})

