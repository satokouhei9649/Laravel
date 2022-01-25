// 新規登録
export  const SignUP= (props) =>  {
    return(
    <div className="signup">
        <a href="#" id="Back">✖️</a>
        <h2>新規登録</h2>
        <form id="signup" >
            <p>名前</p>
            <Input type="text" name="name"/>
            <p>メールアドレス</p>
            <Input type="text" name="email"/>
            <p>パスワード</p>
            <Input type="text" name="password"/>
            <Input className="signBtn" type="submit" value="新規登録"/>
        </form>
            <button className="loginBtn">ログイン画面</button>
    </div>
    );
}
function Input(props) {
    return(
        <input type={props.type}
        placeholder={props.text}
        name={props.name}
        className={props.className}
        value={props.value} />
    );
}

