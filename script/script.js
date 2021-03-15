const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu');

menuBtn.onclick = function()
{
    menu.classList.toggle('menu_active');
    this.classList.toggle('menuBtn_active');
}

window.onload = function(){
    const letters = document.querySelectorAll('.letters')
    var current = 0;
    let timer = setInterval(function(){
             letters[current].style.display = 'inline';
            current++;
            if(current >= letters.length) clearInterval(timer);
        }, 800);
    setTimeout(function(){
        document.querySelector('.preloader').style.transform = 'translateY(-100%)';
        document.querySelector('nav').style.top = 0;
    }, 4000); 
}