/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/React.js":
/*!*******************************!*\
  !*** ./resources/js/React.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _top__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top */ "./resources/js/top.js");
/* harmony import */ var _top__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_top__WEBPACK_IMPORTED_MODULE_0__);
 // const { functionsIn } = require("lodash");
// import {BrowserRouter, Route} from 'react-router-dom'
// import SignUp from './SignUp.js'

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}


var csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
var Users = [{
  userName: "root",
  userPassword: "root",
  userEmail: "root",
  isLogin: false
}];

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.state = {
      userName: '',
      userPassword: '',
      userEmail: '',
      isLogin: false
    };
    return _this;
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', null, React.createElement(Header, null), React.createElement(Modal, null), React.createElement(ShoppingCart, null), React.createElement(BacKGround, {
        'class': 'background'
      }), React.createElement(BacKGround, {
        'class': 'cartbox'
      }), React.createElement(SingUP, null), React.createElement(LoginForm, null), React.createElement(Main, null), React.createElement(Footer, null));
    }
  }]);

  return Index;
}(React.Component); // 新規登録


function SingUP(props) {
  return React.createElement('div', {
    className: 'signup'
  }, React.createElement('a', {
    href: '#',
    id: 'Back'
  }, "\u2716\uFE0F"), React.createElement('h2', null, "\u65B0\u898F\u767B\u9332"), React.createElement('form', {
    id: 'signup'
  }, React.createElement('p', null, "\u540D\u524D"), React.createElement(Input, {
    type: 'text',
    name: 'name',
    value: props.userName,
    onChange: props.AddInfo
  }), React.createElement('p', null, "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"), React.createElement(Input, {
    type: 'text',
    name: 'email',
    value: props.userEmail,
    onChange: props.AddInfo
  }), React.createElement('p', null, "\u30D1\u30B9\u30EF\u30FC\u30C9"), React.createElement(Input, {
    type: 'text',
    name: 'password',
    value: props.userPassword,
    onChange: props.AddInfo
  }), React.createElement(Input, {
    className: 'signBtn',
    type: 'submit',
    value: "\u65B0\u898F\u767B\u9332"
  })), React.createElement('button', {
    className: 'loginBtn'
  }, "\u30ED\u30B0\u30A4\u30F3\u753B\u9762"));
}

function LoginForm() {
  return React.createElement('div', {
    className: 'LoginForm'
  }, React.createElement('a', {
    href: '#',
    className: 'Back'
  }, "\u2716\uFE0F"), React.createElement('h2', null, "\u30ED\u30B0\u30A4\u30F3"), React.createElement('form', {
    route: '/user/login',
    method: 'post',
    id: 'LoginForm'
  }, React.createElement('p', null, "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"), React.createElement(Input, {
    type: 'text',
    'class': 'email'
  }), React.createElement('p', null, "\u30D1\u30B9\u30EF\u30FC\u30C9"), React.createElement(Input, {
    type: 'text',
    'class': 'password'
  }), React.createElement(Input, {
    type: 'submit',
    value: "\u30ED\u30B0\u30A4\u30F3",
    className: 'loginBtn'
  })));
} // ヘッダー


function Header() {
  return React.createElement('header', null, React.createElement(SearchForm, {
    route: 'posts/test',
    'class': 'search topSearch searchForm searchForm1'
  }), React.createElement(MenuList, null));
} // 検索


function SearchForm(props) {
  return React.createElement('form', {
    action: props.route,
    method: '#',
    className: props["class"]
  }, React.createElement(Input, {
    type: 'text',
    text: "\u3053\u3053\u306B\u5165\u529B",
    className: 'searchWord'
  }), React.createElement(Input, {
    type: 'hidden',
    name: 'token',
    value: csrf_token
  }), React.createElement(Input, {
    type: 'submit',
    value: "\u691C\u7D22",
    className: 'submit'
  }));
}

function Input(props) {
  return React.createElement('input', {
    type: props.type,
    placeholder: props.text,
    name: props.name,
    className: props.className,
    value: props.value
  });
} // メニュー


function MenuList(props) {
  var modal = document.getElementById('modal');
  return React.createElement('ul', {
    className: 'list'
  }, React.createElement('li', {
    className: 'icon'
  }, React.createElement('i', {
    id: 'user',
    className: 'fas fa-user fa-2x'
  })), React.createElement('li', {
    className: 'icon'
  }, React.createElement('i', {
    id: 'shoppingCart',
    className: 'fas fa-shopping-cart fa-2x '
  })), React.createElement('li', {
    className: 'icon'
  }, React.createElement('i', {
    id: 'menu',
    className: 'fas fa-bars fa-2x',
    onClick: (0,_top__WEBPACK_IMPORTED_MODULE_0__.AnimationOpen)(modal)
  })));
} // モーダル


function Modal(props) {
  return React.createElement('section', {
    id: 'modal'
  }, React.createElement('div', {
    id: 'close'
  }, "\u2716\uFE0F"), React.createElement('h3', null, "\u65B0\u898F\u767B\u9332\u30FB\u30ED\u30B0\u30A4\u30F3"), React.createElement('p', null, React.createElement('a', {
    id: 'signupFormBtn'
  }, "\u65B0\u898F\u767B\u9332")), React.createElement('p', null, React.createElement('a', {
    id: 'ToLogin'
  }, "\u30ED\u30B0\u30A4\u30F3")), React.createElement('h3', null, "\u304A\u8CB7\u3044\u7269"), React.createElement('p', null, React.createElement('a', {
    href: '.Food'
  }, "\u30B8\u30E3\u30F3\u30EB\u3067\u63A2\u3059")), React.createElement('p', null, React.createElement('a', null, "\u5024\u6BB5\u3067\u63A2\u3059")));
} // 買い物


function ShoppingCart(props) {
  return React.createElement('div', {
    className: 'cart'
  }, React.createElement('h2', null, "\u304A\u8CB7\u3044\u7269\u30AB\u30B4\u306B\u3042\u308B\u5546\u54C1", React.createElement('a', {
    href: '#',
    id: 'shopBack'
  }, "\u2716\uFE0F")), React.createElement('form', {
    action: '/total',
    method: 'get'
  }, React.createElement('ul', null, React.createElement('li', {
    className: 'shoppingList'
  }), React.createElement('li', {
    className: 'shoppingList'
  }), React.createElement('li', {
    className: 'shoppingList'
  }), React.createElement('li', {
    className: 'shoppingList'
  })), React.createElement(Input, {
    type: 'submit',
    value: "\u304A\u652F\u6255\u3044\u3078",
    className: 'buyBtn'
  }), React.createElement(Input, {
    type: 'hidden',
    name: 'token',
    value: csrf_token
  })), React.createElement('button', null, "\u623B\u308B"));
} // 背景


function BacKGround(props) {
  return React.createElement('div', {
    className: props["class"]
  }, props.text);
} // 広告


function Ad(props) {
  return React.createElement('section', {
    className: 'Ad'
  }, React.createElement('ul', {
    className: 'sellAd'
  }, React.createElement('a', {
    href: '/',
    className: 'screen'
  }, React.createElement('li', null, "\u30AF\u30FC\u30DD\u30F3")), React.createElement('li', {
    className: 'screen'
  }, "\u9001\u6599\uFFE5"), React.createElement('li', {
    className: 'screen'
  }, "\u30AA\u30B9\u30E1\u30E1"), React.createElement('li', {
    className: 'screen'
  }, "\u30BB\u30FC\u30EB")), React.createElement('button', {
    className: 'prev'
  }, '\xAB'), React.createElement('button', {
    className: 'next'
  }, '\xBB'), React.createElement('nav', {
    className: 'nav1'
  }));
} // オススメ


function Recommend(props) {
  return React.createElement('span', null, React.createElement('h2', null, props.h2), React.createElement('ul', {
    className: props["class"] + "s"
  }, React.createElement('li', {
    className: props["class"]
  }, React.createElement('span', {
    className: 'rank'
  }, '1'), "\u30AA\u30B9\u30B9\u30E1"), React.createElement('li', {
    className: props["class"]
  }, React.createElement('span', {
    className: 'rank'
  }, '2'), "\u30AA\u30B9\u30B9\u30E1"), React.createElement('li', {
    className: props["class"]
  }, React.createElement('span', {
    className: 'rank'
  }, '3'), "\u30AA\u30B9\u30B9\u30E1"), React.createElement('li', {
    className: props["class"]
  }, React.createElement('span', {
    className: 'rank'
  }, '4'), "\u30AA\u30B9\u30B9\u30E1"), React.createElement('li', {
    className: props["class"]
  }, "\u30BB\u30FC\u30EB\u30B9"), React.createElement('li', {
    className: props["class"]
  }, "\u30BB\u30FC\u30EB\u30B9"), React.createElement('li', {
    className: props["class"]
  }, "\u30BB\u30FC\u30EB\u30B9"), React.createElement('li', {
    className: props["class"]
  }, "\u30BB\u30FC\u30EB\u30B9"), React.createElement('li', {
    className: props["class"]
  }, "\u30BB\u30FC\u30EB\u30B9"), React.createElement('li', {
    className: props["class"]
  }, "\u30BB\u30FC\u30EB\u30B9"), React.createElement('li', {
    className: props["class"]
  }, "\u30BB\u30FC\u30EB\u30B9")));
} // タブ


function FoodMenu(props) {
  return React.createElement('div', null, React.createElement('h2', {
    className: 'Food'
  }, "\u30B8\u30E3\u30F3\u30EB\u3067\u63A2\u3059"), React.createElement('ul', {
    className: 'foodmenu'
  }, React.createElement('li', null, React.createElement('a', {
    href: '#',
    className: 'foodIcon tab1',
    'data-id': 'meat'
  }, React.createElement('img', {
    src: '/img/steak.png'
  }))), React.createElement('li', null, React.createElement('a', {
    href: '#',
    className: 'foodIcon tab2',
    'data-id': 'fish'
  }, React.createElement('i', {
    className: 'fas fa-fish fa-4x'
  }))), React.createElement('li', null, React.createElement('a', {
    href: '#',
    className: 'foodIcon tab3',
    'data-id': 'veg'
  }, React.createElement('i', {
    className: 'fas fa-carrot fa-4x'
  }))), React.createElement('li', null, React.createElement('a', {
    href: '#',
    className: 'foodIcon tab4',
    'data-id': 'egg'
  }, React.createElement('i', {
    className: 'fas fa-egg fa-4x'
  }))), React.createElement('li', null, React.createElement('a', {
    href: '#',
    className: 'foodIcon tab5',
    'data-id': 'milk'
  }, React.createElement('i', {
    className: 'fas fa-apple-alt fa-4x'
  }))), React.createElement('li', null, React.createElement('a', {
    href: '#',
    className: 'foodIcon tab6',
    'data-id': 'drink'
  }, React.createElement('i', {
    className: 'fas fa-wine-bottle fa-4x'
  }))), React.createElement('li', null, React.createElement('a', {
    href: '#',
    className: 'foodIcon tab7',
    'data-id': 'others'
  }, React.createElement('i', {
    className: 'fas fa-bread-slice fa-4x'
  })))));
} // カテゴリー検索


function FoodSection() {
  var titles = [{
    "class": "active",
    id: "meat",
    bordercolor: "20px solid rgb(255, 103, 103)",
    h1: "お肉"
  }, {
    id: "fish",
    bordercolor: "20px solid rgb(48, 103, 255)",
    h1: "魚介類"
  }, {
    id: "veg",
    bordercolor: "20px solid rgb(95, 200, 95)",
    h1: "野菜"
  }, {
    id: "egg",
    bordercolor: "20px solid rgb(255, 245, 103)",
    h1: "卵"
  }, {
    id: "milk",
    bordercolor: "20px solid rgb(255, 202, 103)",
    h1: "乳製品"
  }, {
    id: "drink",
    bordercolor: "20px solid rgb(228, 103, 103)",
    h1: "飲み物"
  }, {
    id: "others",
    bordercolor: "20px solid rgb(255, 98, 255)",
    h1: "その他"
  }];
  var foodsection = titles.map(function (props) {
    return React.createElement('section', {
      className: "content " + props["class"],
      id: props.id,
      style: {
        border: props.bordercolor
      },
      key: props.id
    }, React.createElement('h1', null, props.h1), React.createElement('ul', {
      className: 'foodUl'
    }, React.createElement('li', null), React.createElement('li', null), React.createElement('li', null)));
  });
  return React.createElement('div', null, foodsection);
} // footer


function Footer() {
  return React.createElement('footer', null, React.createElement('h2', {
    id: 'sns'
  }, "\u516C\u5F0FSNS"), React.createElement('ul', null, React.createElement('a', {
    href: '/',
    className: 'FooterIcon'
  }, React.createElement('i', {
    className: 'fab fa-line fa-3x myline',
    'data-fa-transform': 'grow-2',
    'data-fa-mask': 'fas fa-circle fa-xs'
  })), React.createElement('a', {
    href: '/',
    className: 'twitter FooterIcon'
  }, React.createElement('i', {
    className: 'fab fa-twitter fa-2x'
  })), React.createElement('a', {
    href: '/',
    className: 'facebook FooterIcon'
  }, React.createElement('i', {
    className: 'fab fa-facebook-f fa-2x'
  })), React.createElement('a', {
    href: '/',
    className: 'instagram FooterIcon'
  }, React.createElement('i', {
    className: 'fab fa-instagram fa-2x'
  }))), React.createElement('h2', {
    id: 'help'
  }, 'Help & Guide'), React.createElement('li', null, React.createElement('i', {
    className: 'fas fa-phone-alt fa-fw'
  }), " \u304A\u554F\u5408\u308F\u305B"), React.createElement('li', null, React.createElement('i', {
    className: 'fas fa-user fa-fw'
  }), " \u65B0\u898F\u767B\u9332 / \u30ED\u30B0\u30A4\u30F3"), React.createElement('li', null, React.createElement('i', {
    className: 'fas fa-hand-paper fa-fw'
  }), " \u3054\u5229\u7528\u65B9\u6CD5"), React.createElement('li', null, React.createElement('i', {
    className: 'fas fa-box fa-fw'
  }), " \u5546\u54C1\u306B\u3064\u3044\u3066"), React.createElement('li', null, React.createElement('i', {
    className: 'fas fa-truck-moving fa-fw'
  }), " \u914D\u9001\u60C5\u5831"));
} // Top画面


function Main() {
  return React.createElement('div', null, React.createElement(BacKGround, {
    text: "top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059"
  }), React.createElement(SearchForm, {
    route: '#',
    'class': 'search'
  }), React.createElement(Ad, null), React.createElement(Recommend, {
    h2: "\u30AA\u30B9\u30B9\u30E1\u5546\u54C1 \u30FB \u58F2\u308C\u7B4B",
    'class': 'recommend'
  }), React.createElement(Recommend, {
    h2: "\u30BB\u30FC\u30EB",
    'class': 'sell'
  }), React.createElement(FoodMenu, null), React.createElement(FoodSection, null));
}

var domContainer = document.querySelector('.container');
ReactDOM.render(React.createElement(Index, null), domContainer);

/***/ }),

/***/ "./resources/js/top.js":
/*!*****************************!*\
  !*** ./resources/js/top.js ***!
  \*****************************/
/***/ (() => {



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

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/React": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmylaravelapp"] = self["webpackChunkmylaravelapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/React.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;