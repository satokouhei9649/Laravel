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
    const cartBox = document.querySelector('.cartbox');
    const cart = document.querySelector('.cart');
    const backGround = document.querySelector('.background');
    const shopBack = document.getElementById('shopBack');
    const shoppingList = Array.from(document.querySelectorAll('.shoppingList'));
    cartLogo.addEventListener('click', e => {
        e.preventDefault();
        AnimationOpen(backGround,cart,cartBox);
        AnimationMove(shoppingList);
    });
    shopBack.addEventListener('click', () => {
        AnimationClose(backGround,cart,cartBox);
        for (let i = 0; i < shoppingList.length; i ++) {
            shoppingList[i].classList.remove('active');
        }
    });

    // 新規登録・ログイン
    const LoginForm = document.querySelector('.LoginForm');
    const ToLogin1 = document.getElementById('ToLogin');
    const ToLogin2 = document.querySelector('.loginBtn');
    const LoginFormLinks = [ToLogin1,ToLogin2];
    const LoginBackBtn = document.querySelector('.Back');

    const signup = document.querySelector('.signup');
    const signupFormBtn = document.getElementById('signupFormBtn');
    const UserIcon = document.getElementById('user');
    const SignUps = [UserIcon,signupFormBtn];
    const backBtn = document.getElementById('Back');
    SignUps.forEach(El => {
        El.addEventListener('click', e => {
            e.preventDefault();
            AnimationOpen(signup,backGround);
        })
    })
    LoginFormLinks.forEach(El => {
        El.addEventListener('click', e => {
            AnimationOpen(LoginForm,backGround);
            AnimationClose(signup);
        })
    })
    backBtn.addEventListener('click', () => {
        AnimationClose(signup,backGround);
    });
    LoginBackBtn.addEventListener('click', () => {
        AnimationClose(LoginForm,backGround);
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
     const AnimationMove = function(Array){
        Array.forEach((el,index) => {
            // 持ち時間
            let delay =  Array.length * .0 +.3;
            // 間隔
            delay -= index * .5;
            el.style.animationDelay = `${delay}s`;
            el.classList.add('active');
        });
    }



    // タブメニュー
    const menuIcons = document.querySelectorAll('.foodIcon');
    const menuContents = document.querySelectorAll('.content');
   const CreateTab = function(Array1,Array2) {
    Array1.forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault();
            Array1.forEach(icon => {
                icon.classList.remove('active');
            });
            el.classList.add('active');
            Array2.forEach(el => {
                el.classList.remove('active');
            });
            document.getElementById(el.dataset.id).classList.add('active');
        });
    });
   }
  CreateTab(menuIcons,menuContents);
    // カルーセル
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const Ad = document.querySelector('.sellAd');
    const screens = Ad.children;
    const dots = [];
    let count = 0;
    nextBtn.addEventListener('click', () => {
        count++;
        dotsStatus();
        btnStaus();
        moveScreen(screens,Ad);
    });
    prevBtn.addEventListener('click', () => {
        count--;
        dotsStatus();
        btnStaus();
        moveScreen(screens,Ad);
    });
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
    function moveScreen(Array1,Array2) {
        const Width = Array1[0].getBoundingClientRect().width;
        Array2.style.transform = `translateX(${-1 * Width * count}px)`;
    }
    function setDots() {
        for (let i = 0; i < screens.length; i++) {
            const button = document.createElement('button');
            button.addEventListener('click', () => {
                count = i;
                dotsStatus();
                btnStaus();
                moveScreen(screens,Ad);
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
    window.addEventListener('resize', () => {
    moveScreen(screens,Ad);
    });

    const recommends= document.querySelectorAll('.recommend');
    const Sells = document.querySelectorAll('.sell');
    // Intersection Observer API
    const Observer = function() {
    const option = {
        threshold: 0.6,
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
            AnimationMove(array);
            obs.unobserve(D[0].target);
        }
    }
    }
    Observer(recommends,Sells);



}

