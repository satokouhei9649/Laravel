'use strict';
{
    const modal = document.getElementById('modal');
    const menu = document.getElementById('menu');
    const close = document.getElementById('close');
    const menuIcons = document.querySelectorAll('.foodmenu li a');
    const menuContents = document.querySelectorAll('.content');
    // モーダル
    menu.addEventListener('click',() =>{
        modal.classList.add('hidden');
    })
    close.addEventListener('click', () => {
        modal.classList.remove('hidden');
    })
    // タブメニュー
    menuIcons.forEach(clickedIcon => {
        clickedIcon.addEventListener('click', e => {
            e.preventDefault();


            menuIcons.forEach(icon => {
                icon.classList.remove('active');
            });

            clickedIcon.classList.add('active');

            menuContents.forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(clickedIcon.dataset.id).classList.add('active');
        });
    });


    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    const Ad = document.querySelector('.sellAd');
    const screens = Ad.children;
    const dots = [];
    let count = 0;

    function btnStaus() {
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
        if (count == 0) {
            prevBtn.classList.add('hidden');
        }
        if (count == screens.length -1) {
            nextBtn.classList.add('hidden');
        }
    }
    function moveScreen() {
        const screenWidth = screens[0].getBoundingClientRect().width;
        Ad.style.transform = `translateX(${-1 * screenWidth * count}px)`;
    }

    function setDots() {
        for (let i = 0; i < screens.length; i++) {
            const button = document.createElement('button');
            dots.push('button');
            document.querySelector('nav').appendChild(button).classList.add('screenBtn');
        }
        dots[0].classList.add('current');
    }

    btnStaus();
    setDots();
    nextBtn.addEventListener('click', () => {
        // if (count > 3) {
        //     count = 0;
        // }
        count++;
        btnStaus();
        moveScreen();
    });

    prevBtn.addEventListener('click', () => {
        // if (count > 3) {
        //     count = 0;
        // }
        count--;
        btnStaus();
        moveScreen();
    });








}
