'use strict';
{
    const modal = document.getElementById('modal');
    const menu = document.getElementById('menu');
    const close = document.getElementById('close');
    const menuIcons = document.querySelectorAll('.foodmenu li a');
    const menuContents = document.querySelectorAll('.content');
    // モーダル
    menu.addEventListener('click',() =>{
        modal.classList.remove('hidden');
        modal.classList.add('open');
    })
    close.addEventListener('click', () => {
        modal.classList.remove('open');
        modal.classList.add('hidden');
    });
    // ショッピングカート
    const cartLogo = document.getElementById('shoppingCart');
    const cartBox = document.querySelector('.cartBox');
    const cart = document.querySelector('.cart');
    const backGround = document.querySelector('.backGround');

    cartLogo.addEventListener('click', () => {
        // cart.classList.add('open');
        backGround.classList.add('open');
        // cartBox.classList.add('open');
    });
    // 新規登録
    const backBtn = document.getElementById('Back');
    const signupFormBtn = document.getElementById('signupFormBtn');
    const signup = document.querySelector('.signup');


    signupFormBtn.addEventListener('click', e => {
        e.preventDefault();
        signup.classList.add('open');
        backGround.classList.add('open');
    });
    backBtn.addEventListener('click', () => {
        AnimationClose(signup,backGround);
    });
    // backGround.addEventListener('click',() => {
    //     AnimationClass(signup,backGround);
    // });

    function AnimationClose(A1,A2) {
        A1.classList.remove('open');
        A2.classList.remove('open');
        A1.classList.add('hide');
        A2.classList.add('hide');
    }

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

    // カルーセル
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const Ad = document.querySelector('.sellAd');
    const screens = Ad.children;
    const dots = [];
    let count = 0;
    // 矢印の表示
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
// スライド
    function moveScreen() {
        const screenWidth = screens[0].getBoundingClientRect().width;
        Ad.style.transform = `translateX(${-1 * screenWidth * count}px)`;
    }

    function setDots() {
        for (let i = 0; i < screens.length; i++) {
            const button = document.createElement('button');
            button.addEventListener('click', () => {
                count = i;
                dotsStatus();
                btnStaus();
                moveScreen();
            });
            dots.push(button);
            document.querySelector('nav').appendChild(button).classList.add('screenBtn');
        }
        dots[0].classList.add('current');
    }

    function dotsStatus() {
        dots.forEach( dot => {
            dot.classList.remove('current');
        });
        dots[count].classList.add('current');
    }

    btnStaus();
    setDots();
    nextBtn.addEventListener('click', () => {
        count++;
        dotsStatus();
        btnStaus();
        moveScreen();
    });

    prevBtn.addEventListener('click', () => {
        count--;
        dotsStatus();
        btnStaus();
        moveScreen();
    });

window.addEventListener('resize', () => {
    moveScreen();
});






}
