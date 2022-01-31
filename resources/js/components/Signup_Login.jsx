import {Input} from './Header.jsx';
// 新規登録
 export function SingUP(props) {
    return(
    <div className="signup">
        <a href="#" id="Back">✖️</a>
        <h2>新規登録</h2>
        <form id="signup" >
            <p>名前</p>
            <Input type="text" name="name" value={props.userName} />
            <p>メールアドレス</p>
            <Input type="text" name="email" value={props.userEmail} />
            <p>パスワード</p>
            <Input type="text" name="password" value={props.userPassword} />
            <Input className="signBtn" type="submit" value="新規登録"/>
        </form>
            <button className="loginBtn">ログイン画面</button>
    </div>
    );
}

export function LoginForm () {
        return(
            <div className="LoginForm">
                <a href="#" className="Back">✖️</a>
                <h2>ログイン</h2>
                <form route="/user/login" method="post" id="LoginForm">
                    <p>メールアドレス</p>
                    <Input type="text" class="email"/>
                    <p>パスワード</p>
                    <Input type="text" class="password"/>
                    <Input type="submit" value="ログイン" className="loginBtn"/>
                </form>
            </div>
        );
    }
