class Module {
    
}
export const OpenModal = () => {
    const modal = document.getElementById('modal');
    modal.classList.remove('open');
    AnimationOpen(modal);
}

export const OpenShop = () => {
    const flashMessage = document.querySelector('.flashMessage');
    flashMessage.classList.add('hidden');
    const cartBox = document.querySelector('.cartbox');
    const cart = document.querySelector('.cart');
    const backGround = document.querySelector('.background');
    AnimationOpen(cartBox,cart,backGround);
}
export const AnimationOpen = function() {
    for(let i=0; i < arguments.length; i++) {
        arguments[i].classList.remove('hidden');
        arguments[i].classList.add('open');
    }
}
export const AnimationClose = function() {
    for(let i=0; i < arguments.length; i++) {
        arguments[i].classList.remove('open');
        arguments[i].classList.add('hidden');
    }
}
export const Open = function(e){
    const backGround = document.querySelector('.background');
    switch(e.target.name) {
        case 'signup':
            const signup = document.querySelector('.signup');
            AnimationOpen(signup,backGround);
        break;
        case 'login':
            const LoginForm = document.querySelector('.LoginForm');
            AnimationOpen(LoginForm,backGround);
        break;
        case 'infonumber':
            const InfoNumberForm = document.querySelector('.InfoNumberForm');
            AnimationOpen(InfoNumberForm,backGround);
        break;
     }
}
export const Close = (e) => {
    const backGround = document.querySelector('.background');
    switch(e.target.name) {
        case 'signup':
            const signup = document.querySelector('.signup');
            AnimationClose(signup,backGround);
        break;
        case 'login':
            const LoginForm = document.querySelector('.LoginForm');
            AnimationClose(LoginForm,backGround);
        break;
        case 'modal':
            const modal = document.getElementById('modal');
            AnimationClose(modal);
        break;
        case 'shop':
            const flashMessage = document.querySelector('.flashMessage');
            flashMessage.classList.remove('active');
            const cartBox = document.querySelector('.cartbox');
            const cart = document.querySelector('.cart');
            AnimationClose(cartBox,cart,backGround);
        break;
        case 'infonumber':
            const InfoNumberForm = document.querySelector('.InfoNumberForm');
            AnimationClose(InfoNumberForm,backGround);
        break;
     }
}
// ???????????????
 export const Slide = () => {
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
    // ???????????????
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
// ????????????
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
}


// Intersection Observer API
export const Observer = function() {
    // ??????
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
const AnimationMove = function(Array){
    Array.forEach((el,index) => {
        // ????????????
        let delay =  Array.length * .0 +.3;
        // ??????
        delay -= index * .5;
        el.style.animationDelay = `${delay}s`;
        el.classList.add('active');
    });
}

// ????????????????????????
export const GotoCart = (e) => {
    // ???????????????
    const flashMessage = document.querySelector('.flashMessage');
    flashMessage.classList.add('active');
    // ?????????
    const ShopListUl = document.getElementById('ShopListUl');
    const list = document.createElement('li');
    const DeleteBtn = document.createElement('button');
    const input = document.createElement('input');
    input.setAttribute('type','hidden');
    input.setAttribute('name',e.target.name);
    input.setAttribute('value',e.target.value);
    DeleteBtn.textContent ="[X]";
    DeleteBtn.classList.add('DeleteBtn');
    list.textContent = e.target.name;
    list.classList.add('shoppingList');
    ShopListUl.appendChild(list);
    list.appendChild(input);
    list.appendChild(DeleteBtn);
    // ???????????????????????????
    // ????????????????????????????????????????????????
  flashMessage.addEventListener('animationend',() => {
      flashMessage.classList.remove('active');
  })
}

export const Remove = (e) =>{
    const TargetLi = e.target.parentNode;
    TargetLi.remove();
};
 // ??????????????????
export const CreateTab = function(Array1,Array2) {
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
