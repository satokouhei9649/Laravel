/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./resources/js/top.js ***!
  \*****************************/


{
  // 矢印の表示
  var btnStaus = function btnStaus() {
    prevBtn.classList.remove('hidden');
    nextBtn.classList.remove('hidden');

    if (count == 0) {
      prevBtn.classList.add('hidden');
    }

    if (count == screens.length - 1) {
      nextBtn.classList.add('hidden');
    }
  }; // スライド


  var moveScreen = function moveScreen(Array1, Array2) {
    var Width = Array1[0].getBoundingClientRect().width;
    Array2.style.transform = "translateX(".concat(-1 * Width * count, "px)");
  };

  var setDots = function setDots() {
    var _loop = function _loop(i) {
      var button = document.createElement('button');
      button.addEventListener('click', function () {
        count = i;
        dotsStatus();
        btnStaus();
        moveScreen(screens, Ad);
      });
      dots.push(button);
      document.querySelector('nav').appendChild(button).classList.add('screenBtn');
    };

    for (var i = 0; i < screens.length; i++) {
      _loop(i);
    }

    dots[0].classList.add('current');
  };

  var dotsStatus = function dotsStatus() {
    dots.forEach(function (dot) {
      dot.classList.remove('current');
    });
    dots[count].classList.add('current');
  };

  var menu = document.getElementById('menu');
  var close = document.getElementById('close'); // モーダル

  menu.addEventListener('click', function () {
    AnimationOpen(modal);
  });
  close.addEventListener('click', function () {
    AnimationClose(modal);
  }); // ショッピングカート

  var cartLogo = document.getElementById('shoppingCart');
  var cartBox = document.querySelector('.cartbox');
  var cart = document.querySelector('.cart');
  var backGround = document.querySelector('.background');
  var shopBack = document.getElementById('shopBack');
  var shoppingList = Array.from(document.querySelectorAll('.shoppingList'));
  cartLogo.addEventListener('click', function (e) {
    e.preventDefault();
    AnimationOpen(backGround, cart, cartBox);
    AnimationMove(shoppingList);
  });
  shopBack.addEventListener('click', function () {
    AnimationClose(backGround, cart, cartBox);

    for (var i = 0; i < shoppingList.length; i++) {
      shoppingList[i].classList.remove('active');
    }
  }); // 新規登録・ログイン

  var LoginForm = document.querySelector('.LoginForm');
  var ToLogin1 = document.getElementById('ToLogin');
  var ToLogin2 = document.querySelector('.loginBtn');
  var LoginFormLinks = [ToLogin1, ToLogin2];
  var LoginBackBtn = document.querySelector('.Back');
  var signup = document.querySelector('.signup');
  var signupFormBtn = document.getElementById('signupFormBtn');
  var UserIcon = document.getElementById('user');
  var SignUps = [UserIcon, signupFormBtn];
  var backBtn = document.getElementById('Back');
  SignUps.forEach(function (El) {
    El.addEventListener('click', function (e) {
      e.preventDefault();
      AnimationOpen(signup, backGround);
    });
  });
  LoginFormLinks.forEach(function (El) {
    El.addEventListener('click', function (e) {
      AnimationOpen(LoginForm, backGround);
      AnimationClose(signup);
    });
  });
  backBtn.addEventListener('click', function () {
    AnimationClose(signup, backGround);
  });
  LoginBackBtn.addEventListener('click', function () {
    AnimationClose(LoginForm, backGround);
  });

  var AnimationOpen = function AnimationOpen() {
    for (var i = 0; i < arguments.length; i++) {
      arguments[i].classList.remove('hidden');
      arguments[i].classList.add('open');
    }
  };

  var AnimationClose = function AnimationClose() {
    for (var i = 0; i < arguments.length; i++) {
      arguments[i].classList.remove('open');
      arguments[i].classList.add('hidden');
    }
  };

  var AnimationMove = function AnimationMove(Array) {
    Array.forEach(function (el, index) {
      // 持ち時間
      var delay = Array.length * .0 + .3; // 間隔

      delay -= index * .5;
      el.style.animationDelay = "".concat(delay, "s");
      el.classList.add('active');
    });
  }; // タブメニュー


  var menuIcons = document.querySelectorAll('.foodIcon');
  var menuContents = document.querySelectorAll('.content');

  var CreateTab = function CreateTab(Array1, Array2) {
    Array1.forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        Array1.forEach(function (icon) {
          icon.classList.remove('active');
        });
        el.classList.add('active');
        Array2.forEach(function (el) {
          el.classList.remove('active');
        });
        document.getElementById(el.dataset.id).classList.add('active');
      });
    });
  };

  CreateTab(menuIcons, menuContents); // カルーセル

  var nextBtn = document.querySelector('.next');
  var prevBtn = document.querySelector('.prev');
  var Ad = document.querySelector('.sellAd');
  var screens = Ad.children;
  var dots = [];
  var count = 0;
  nextBtn.addEventListener('click', function () {
    count++;
    dotsStatus();
    btnStaus();
    moveScreen(screens, Ad);
  });
  prevBtn.addEventListener('click', function () {
    count--;
    dotsStatus();
    btnStaus();
    moveScreen(screens, Ad);
  });
  btnStaus();
  setDots();
  window.addEventListener('resize', function () {
    moveScreen(screens, Ad);
  });
  var recommends = document.querySelectorAll('.recommend');
  var Sells = document.querySelectorAll('.sell'); // Intersection Observer API

  var Observer = function Observer() {
    var _arguments = arguments;
    var option = {
      threshold: 0.6,
      rootMargin: '0px 0px -10%'
    };

    var _loop2 = function _loop2(i) {
      var observer = new IntersectionObserver(check, option);

      _arguments[i].forEach(function (argument) {
        observer.observe(argument);
      });

      var array = _arguments[i];

      function check(D, obs) {
        if (!D[0].isIntersecting) {
          return;
        }

        AnimationMove(array);
        obs.unobserve(D[0].target);
      }
    };

    for (var i = 0; i < arguments.length; i++) {
      _loop2(i);
    }
  };

  Observer(recommends, Sells);
}
/******/ })()
;