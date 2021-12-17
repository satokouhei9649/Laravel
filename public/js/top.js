{
    'use strict';
    const modal = document.getElementById('modal');
    const menu = document.getElementById('menu');
    const close = document.getElementById('close');
    menu.addEventListener('click',() =>{
        modal.classList.add('hidden');
    })
    close.addEventListener('click', () => {
        modal.classList.remove('hidden');
    })
}
