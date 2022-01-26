// 新規登録
export var SignUP = function SignUP(props) {
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
            "form",
            { id: "signup" },
            React.createElement(
                "p",
                null,
                "\u540D\u524D"
            ),
            React.createElement(Input, { type: "text", name: "name" }),
            React.createElement(
                "p",
                null,
                "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"
            ),
            React.createElement(Input, { type: "text", name: "email" }),
            React.createElement(
                "p",
                null,
                "\u30D1\u30B9\u30EF\u30FC\u30C9"
            ),
            React.createElement(Input, { type: "text", name: "password" }),
            React.createElement(Input, { className: "signBtn", type: "submit", value: "\u65B0\u898F\u767B\u9332" })
        ),
        React.createElement(
            "button",
            { className: "loginBtn" },
            "\u30ED\u30B0\u30A4\u30F3\u753B\u9762"
        )
    );
};
function Input(props) {
    return React.createElement("input", { type: props.type,
        placeholder: props.text,
        name: props.name,
        className: props.className,
        value: props.value });
}