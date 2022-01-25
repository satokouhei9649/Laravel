// 新規登録
const SingUP  = (props) => {
    return(
    <div className="signup">
        <a href="#" id="Back">✖️</a>
        <h2>新規登録</h2>
        <form id="signup" >
            <p>名前</p>
            <Input type="text" name="name" value={props.userName} onChange={props.AddInfo}/>
            <p>メールアドレス</p>
            <Input type="text" name="email" value={props.userEmail} onChange={props.AddInfo}/>
            <p>パスワード</p>
            <Input type="text" name="password" value={props.userPassword} onChange={props.AddInfo}/>
            <Input className="signBtn" type="submit" value="新規登録"/>
        </form>
            <button className="loginBtn">ログイン画面</button>
    </div>
    );
}
export default SingUP
