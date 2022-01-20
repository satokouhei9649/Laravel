'use strict';

// const { functionsIn } = require("lodash");

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Top = function (_React$Component) {
    _inherits(Top, _React$Component);

    function Top(props) {
        _classCallCheck(this, Top);

        return _possibleConstructorReturn(this, (Top.__proto__ || Object.getPrototypeOf(Top)).call(this, props));
    }

    _createClass(Top, [{
        key: "render",
        value: function render() {
            return React.createElement(Header, null);
        }
    }]);

    return Top;
}(React.Component);

function Header() {
    return React.createElement(
        "header",
        null,
        React.createElement(Form, null),
        React.createElement(
            "ul",
            { className: "list" },
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
        )
    );
}
function Form() {
    return React.createElement(
        "form",
        { action: "{{route('posts.login') }}", method: "", className: "search topSearch searchForm searchForm1" },
        React.createElement(Input, { type: "text", text: "\u3053\u3053\u306B\u5165\u529B", className: "searchWord" }),
        React.createElement(Input, { type: "submit", value: "\u691C\u7D22", className: "submit" })
    );
}
function Input(props) {
    return React.createElement("input", { type: props.type, placeholder: props.text, className: props.className, value: props.value });
}

var domContainer = document.querySelector('.container');
ReactDOM.render(React.createElement(Top, null), domContainer);