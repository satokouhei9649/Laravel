'use strict';
// const { functionsIn } = require("lodash");
// import {AnimationMove} from "public/js/top.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index(props) {
        _classCallCheck(this, Index);

        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    }

    _createClass(Index, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, null),
                React.createElement(Modal, null),
                React.createElement(ShoppingCart, null),
                React.createElement(BacKGround, { "class": "background" }),
                React.createElement(BacKGround, { "class": "cartbox" }),
                React.createElement(SingUP, null),
                React.createElement(Main, null),
                React.createElement(Footer, null)
            );
        }
    }]);

    return Index;
}(React.Component);
// ヘッダー


function Header() {
    return React.createElement(
        "header",
        null,
        React.createElement(SearchForm, { route: "/test", "class": "search topSearch searchForm searchForm1" }),
        React.createElement(MenuList, null)
    );
}
// 検索

var SearchForm = function (_React$Component2) {
    _inherits(SearchForm, _React$Component2);

    function SearchForm(props) {
        _classCallCheck(this, SearchForm);

        var _this2 = _possibleConstructorReturn(this, (SearchForm.__proto__ || Object.getPrototypeOf(SearchForm)).call(this, props));

        var csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
        _this2.state = {
            route: props.route,
            csrf_token: csrf_token,
            class: props.class
        };
        return _this2;
    }

    _createClass(SearchForm, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { action: this.state.route, method: "post", className: this.state.class },
                React.createElement(Input, { type: "text", text: "\u3053\u3053\u306B\u5165\u529B", className: "searchWord" }),
                React.createElement(Input, { type: "hidden", name: "token", value: this.state.csrf_token }),
                React.createElement(Input, { type: "submit", value: "\u691C\u7D22", className: "submit" })
            );
        }
    }]);

    return SearchForm;
}(React.Component);

function Input(props) {
    return React.createElement("input", { type: props.type,
        placeholder: props.text,
        name: props.name,
        className: props.className,
        value: props.value });
}
function MenuList(props) {
    return React.createElement(
        "ul",
        { className: "list" },
        React.createElement(
            "li",
            { className: "icon" },
            React.createElement(
                "span",
                { id: "user" },
                React.createElement("i", { className: "fas fa-user fa-2x" })
            )
        ),
        React.createElement(
            "li",
            { className: "icon" },
            React.createElement(
                "span",
                { id: "shoppingCart" },
                React.createElement("i", { className: "fas fa-shopping-cart fa-2x " })
            )
        ),
        React.createElement(
            "li",
            { className: "icon" },
            React.createElement(
                "span",
                { id: "menu" },
                React.createElement("i", { className: "fas fa-bars fa-2x" })
            )
        )
    );
}
// モーダル
function Modal(props) {
    return React.createElement(
        "section",
        { id: "modal" },
        React.createElement(
            "div",
            { id: "close" },
            "\u2716\uFE0F"
        ),
        React.createElement(
            "h3",
            null,
            "\u65B0\u898F\u767B\u9332\u30FB\u30ED\u30B0\u30A4\u30F3"
        ),
        React.createElement(
            "p",
            null,
            React.createElement(
                "a",
                { id: "signupFormBtn" },
                "\u65B0\u898F\u767B\u9332"
            )
        ),
        React.createElement(
            "p",
            null,
            React.createElement(
                "a",
                { href: "#" },
                "\u30ED\u30B0\u30A4\u30F3"
            )
        ),
        React.createElement(
            "h3",
            null,
            "\u304A\u8CB7\u3044\u7269"
        ),
        React.createElement(
            "p",
            null,
            React.createElement(
                "a",
                { href: ".Food" },
                "\u30B8\u30E3\u30F3\u30EB\u3067\u63A2\u3059"
            )
        ),
        React.createElement(
            "p",
            null,
            React.createElement(
                "a",
                null,
                "\u5024\u6BB5\u3067\u63A2\u3059"
            )
        )
    );
}
// 買い物
function ShoppingCart(props) {
    return React.createElement(
        "div",
        { className: "cart" },
        React.createElement(
            "h2",
            null,
            "\u304A\u8CB7\u3044\u7269\u30AB\u30B4\u306B\u3042\u308B\u5546\u54C1",
            React.createElement(
                "a",
                { href: "#", id: "shopBack" },
                "\u2716\uFE0F"
            )
        ),
        React.createElement(
            "ul",
            null,
            React.createElement("li", { className: "shoppingList" }),
            React.createElement("li", { className: "shoppingList" }),
            React.createElement("li", { className: "shoppingList" }),
            React.createElement("li", { className: "shoppingList" })
        ),
        React.createElement(Input, { type: "submit", value: "\u304A\u652F\u6255\u3044\u3078", className: "buyBtn" }),
        React.createElement(
            "button",
            null,
            "\u623B\u308B"
        )
    );
}
// 背景
function BacKGround(props) {
    return React.createElement(
        "div",
        { className: props.class },
        props.text
    );
}
// 新規登録
function SingUP(props) {
    return React.createElement(
        "div",
        { className: "signup" },
        React.createElement(
            "a",
            { href: "#", id: "Back" },
            "\u2716\uFE0F"
        ),
        React.createElement(
            "h2",
            null,
            "\u65B0\u898F\u767B\u9332"
        ),
        React.createElement(
            "p",
            null,
            "\u540D\u524D"
        ),
        React.createElement(Input, { type: "text", "class": "name" }),
        React.createElement(
            "p",
            null,
            "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"
        ),
        React.createElement(Input, { type: "text", "class": "email" }),
        React.createElement(
            "p",
            null,
            "\u4F4F\u6240"
        ),
        React.createElement(Input, { type: "text", "class": "email" }),
        React.createElement(
            "p",
            null,
            "\u96FB\u8A71\u756A\u53F7"
        ),
        React.createElement(Input, { type: "text", "class": "email" }),
        React.createElement(
            "button",
            { className: "signBtn" },
            "\u65B0\u898F\u767B\u9332"
        ),
        React.createElement(
            "button",
            { className: "loginBtn" },
            "\u30ED\u30B0\u30A4\u30F3\u753B\u9762"
        )
    );
}
// 広告
function Ad(props) {
    return React.createElement(
        "section",
        { className: "Ad" },
        React.createElement(
            "ul",
            { className: "sellAd" },
            React.createElement(
                "a",
                { href: "/", className: "screen" },
                React.createElement(
                    "li",
                    null,
                    "\u30AF\u30FC\u30DD\u30F3"
                )
            ),
            React.createElement(
                "li",
                { className: "screen" },
                "\u9001\u6599\uFFE5"
            ),
            React.createElement(
                "li",
                { className: "screen" },
                "\u30AA\u30B9\u30E1\u30E1"
            ),
            React.createElement(
                "li",
                { className: "screen" },
                "\u30BB\u30FC\u30EB"
            )
        ),
        React.createElement(
            "button",
            { className: "prev" },
            "\xAB"
        ),
        React.createElement(
            "button",
            { className: "next" },
            "\xBB"
        ),
        React.createElement("nav", { className: "nav1" })
    );
}
// オススメ
function Recommend(props) {
    return React.createElement(
        "span",
        null,
        React.createElement(
            "h2",
            null,
            props.h2
        ),
        React.createElement(
            "ul",
            { className: props.class + "s" },
            React.createElement(
                "li",
                { className: props.class },
                React.createElement(
                    "span",
                    { className: "rank" },
                    "1"
                ),
                "\u30AA\u30B9\u30B9\u30E1"
            ),
            React.createElement(
                "li",
                { className: props.class },
                React.createElement(
                    "span",
                    { className: "rank" },
                    "2"
                ),
                "\u30AA\u30B9\u30B9\u30E1"
            ),
            React.createElement(
                "li",
                { className: props.class },
                React.createElement(
                    "span",
                    { className: "rank" },
                    "3"
                ),
                "\u30AA\u30B9\u30B9\u30E1"
            ),
            React.createElement(
                "li",
                { className: props.class },
                React.createElement(
                    "span",
                    { className: "rank" },
                    "4"
                ),
                "\u30AA\u30B9\u30B9\u30E1"
            ),
            React.createElement(
                "li",
                { className: props.class },
                "\u30BB\u30FC\u30EB\u30B9"
            ),
            React.createElement(
                "li",
                { className: props.class },
                "\u30BB\u30FC\u30EB\u30B9"
            ),
            React.createElement(
                "li",
                { className: props.class },
                "\u30BB\u30FC\u30EB\u30B9"
            ),
            React.createElement(
                "li",
                { className: props.class },
                "\u30BB\u30FC\u30EB\u30B9"
            ),
            React.createElement(
                "li",
                { className: props.class },
                "\u30BB\u30FC\u30EB\u30B9"
            ),
            React.createElement(
                "li",
                { className: props.class },
                "\u30BB\u30FC\u30EB\u30B9"
            ),
            React.createElement(
                "li",
                { className: props.class },
                "\u30BB\u30FC\u30EB\u30B9"
            )
        )
    );
}
// タブ
function FoodMenu(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h2",
            { className: "Food" },
            "\u30B8\u30E3\u30F3\u30EB\u3067\u63A2\u3059"
        ),
        React.createElement(
            "ul",
            { className: "foodmenu" },
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "#", className: "foodIcon tab1", "data-id": "meat" },
                    React.createElement("img", { src: "/img/steak.png" })
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "#", className: "foodIcon tab2", "data-id": "fish" },
                    React.createElement("i", { className: "fas fa-fish fa-4x" })
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "#", className: "foodIcon tab3", "data-id": "veg" },
                    React.createElement("i", { className: "fas fa-carrot fa-4x" })
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "#", className: "foodIcon tab4", "data-id": "egg" },
                    React.createElement("i", { className: "fas fa-egg fa-4x" })
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "#", className: "foodIcon tab5", "data-id": "milk" },
                    React.createElement("i", { className: "fas fa-apple-alt fa-4x" })
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "#", className: "foodIcon tab6", "data-id": "drink" },
                    React.createElement("i", { className: "fas fa-wine-bottle fa-4x" })
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "#", className: "foodIcon tab7", "data-id": "others" },
                    React.createElement("i", { className: "fas fa-bread-slice fa-4x" })
                )
            )
        )
    );
}
function FoodSection() {
    var titles = [{ class: "active", id: "meat", bordercolor: "20px solid rgb(255, 103, 103)", h1: "お肉" }, { id: "fish", bordercolor: "20px solid rgb(48, 103, 255)", h1: "魚介類" }, { id: "veg", bordercolor: "20px solid rgb(95, 200, 95)", h1: "野菜" }, { id: "egg", bordercolor: "20px solid rgb(255, 245, 103)", h1: "卵" }, { id: "milk", bordercolor: "20px solid rgb(255, 202, 103)", h1: "乳製品" }, { id: "drink", bordercolor: "20px solid rgb(228, 103, 103)", h1: "飲み物" }, { id: "others", bordercolor: "20px solid rgb(255, 98, 255)", h1: "その他" }];
    var foodsection = titles.map(function (props) {
        return React.createElement(
            "section",
            { className: "content " + props.class, id: props.id, style: { border: props.bordercolor }, key: props.id },
            React.createElement(
                "h1",
                null,
                props.h1
            ),
            React.createElement(
                "ul",
                { className: "foodUl" },
                React.createElement("li", null),
                React.createElement("li", null),
                React.createElement("li", null)
            )
        );
    });
    return React.createElement(
        "div",
        null,
        foodsection
    );
}
// footer
function Footer() {
    return React.createElement(
        "footer",
        null,
        React.createElement(
            "h2",
            { id: "sns" },
            "\u516C\u5F0FSNS"
        ),
        React.createElement(
            "ul",
            null,
            React.createElement(
                "a",
                { href: "/", className: "FooterIcon" },
                React.createElement("i", { className: "fab fa-line fa-3x myline", "data-fa-transform": "grow-2", "data-fa-mask": "fas fa-circle fa-xs" })
            ),
            React.createElement(
                "a",
                { href: "/", className: "twitter FooterIcon" },
                React.createElement("i", { className: "fab fa-twitter fa-2x" })
            ),
            React.createElement(
                "a",
                { href: "/", className: "facebook FooterIcon" },
                React.createElement("i", { className: "fab fa-facebook-f fa-2x" })
            ),
            React.createElement(
                "a",
                { href: "/", className: "instagram FooterIcon" },
                React.createElement("i", { className: "fab fa-instagram fa-2x" })
            )
        ),
        React.createElement(
            "h2",
            { id: "help" },
            "Help & Guide"
        ),
        React.createElement(
            "li",
            null,
            React.createElement("i", { className: "fas fa-phone-alt fa-fw" }),
            " \u304A\u554F\u5408\u308F\u305B"
        ),
        React.createElement(
            "li",
            null,
            React.createElement("i", { className: "fas fa-user fa-fw" }),
            " \u65B0\u898F\u767B\u9332 / \u30ED\u30B0\u30A4\u30F3"
        ),
        React.createElement(
            "li",
            null,
            React.createElement("i", { className: "fas fa-hand-paper fa-fw" }),
            " \u3054\u5229\u7528\u65B9\u6CD5"
        ),
        React.createElement(
            "li",
            null,
            React.createElement("i", { className: "fas fa-box fa-fw" }),
            " \u5546\u54C1\u306B\u3064\u3044\u3066"
        ),
        React.createElement(
            "li",
            null,
            React.createElement("i", { className: "fas fa-truck-moving fa-fw" }),
            " \u914D\u9001\u60C5\u5831"
        )
    );
}
function Main() {
    return React.createElement(
        "div",
        null,
        React.createElement(BacKGround, { text: "top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059top\u30DA\u30FC\u30B8\u3067\u3059" }),
        React.createElement(SearchForm, { route: "#", "class": "search" }),
        React.createElement(Ad, null),
        React.createElement(Recommend, { h2: "\u30AA\u30B9\u30B9\u30E1\u5546\u54C1 \u30FB \u58F2\u308C\u7B4B", "class": "recommend" }),
        React.createElement(Recommend, { h2: "\u30BB\u30FC\u30EB", "class": "sell" }),
        React.createElement(FoodMenu, null),
        React.createElement(FoodSection, null)
    );
}
var domContainer = document.querySelector('.container');
ReactDOM.render(React.createElement(Index, null), domContainer);