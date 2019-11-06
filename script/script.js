const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu');

menuBtn.onclick = function()
{
    menu.classList.toggle('menu_active');
    this.classList.toggle('menuBtn_active');
}

window.onload = function(){
    setTimeout(function(){
        document.querySelector('.preloader').style.display = 'none';
        document.querySelector('nav').style.top = 0;
    }, 2000);
}

