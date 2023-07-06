const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const aside = document.querySelector('aside');
const botonesMenu = document.querySelector('.boton-menu');



openMenu.addEventListener("click", () => {
aside.classList.add('aside-visible');

})
closeMenu.addEventListener("click", () => {

    aside.classList.remove('aside-visible');
    });
    
 