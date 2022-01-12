'use strict';

{
    const modal = document.getElementById('modal');
    const menu = document.getElementById('menu');
    const close = document.getElementById('close');
    // モーダル
    menu.addEventListener('click',() =>{
        AnimationOpen(modal);
    })
    close.addEventListener('click', () => {
       AnimationClose(modal);
    });
    // ショッピングカート
    const cartLogo = document.getElementById('shoppingCart');
    const cartBox = document.querySelector('.cartBox');
    const cart = document.querySelector('.cart');
    const backGround = document.querySelector('.backGround');
    const shopBack = document.getElementById('shopBack');
    const shoppingList = Array.from(document.querySelectorAll('.shoppingList'));
    cartLogo.addEventListener('click', e => {
        e.preventDefault();
        AnimationOpen(backGround,cart,cartBox);

        for (let i = 0; i < shoppingList.length; i++) {
            let delay = shoppingList.length * .8;
            delay -= i * .5;
            console.log(delay);
            shoppingList[i].style.animationDelay = `${delay}s`;
            shoppingList[i].classList.add('active');
        }
    });
    shopBack.addEventListener('click', () => {
        AnimationClose(backGround,cart,cartBox);
        for (let i = 0; i < shoppingList.length; i ++) {
            shoppingList[i].classList.remove('active');
        }
    });

    // 新規登録
    const backBtn = document.getElementById('Back');
    const signupFormBtn = document.getElementById('signupFormBtn');
    const signup = document.querySelector('.signup');


    signupFormBtn.addEventListener('click', e => {
        e.preventDefault();
        AnimationOpen(signup,backGround);
    });

    backBtn.addEventListener('click', () => {
        AnimationClose(signup,backGround);
    });

    const AnimationOpen = function() {
        for(let i=0; i < arguments.length; i++) {
            arguments[i].classList.remove('hidden');
            arguments[i].classList.add('open');
        }
    }
    const AnimationClose = function() {
        for(let i=0; i < arguments.length; i++) {
            arguments[i].classList.remove('open');
            arguments[i].classList.add('hidden');
        }
    }


    // タブメニュー
    const menuIcons = document.querySelectorAll('.foodmenu li a');
    const menuContents = document.querySelectorAll('.content');

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

const recommends= document.querySelectorAll('.recommend');
const Sells = document.querySelectorAll('.sell');
// Intersection Observer API
const Observer = function() {
    const option = {
        threshold: 0.8,
        rootMargin: '0px 0px -10%'
    };
    for(let i=0; i < arguments.length; i++) {
        const observer = new IntersectionObserver(check, option);
        arguments[i].forEach(argument =>{
            observer.observe(argument);
        });
        const array = arguments[i]
        function check(D,obs) {
            if (!D[0].isIntersecting) {
                return;
            }
            AnimationDelay(array);
            obs.unobserve(D[0].target);
        }
    }
}
Observer(recommends,Sells);

const AnimationDelay = function(Array){
        Array.forEach((el,index) => {
            // 持ち時間
            let delay =  Array.length * .0 +.3;
            // 間隔
            delay -= index * .5;
            el.style.animationDelay = `${delay}s`;
            el.classList.add('active');
        });
       }


}

