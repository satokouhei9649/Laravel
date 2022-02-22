import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CloseSignUp } from './Header';
// 新規登録
 export function SignUP(props) {
    //  ステート
    const [Users, setPosts] = useState([]);
    useEffect(() => {
        getPostsData();
    },[])
    // 一覧取得
    const getPostsData = () => {
        axios
        .get('/api/posts')
        .then(response => {
        setPosts(response.data);
        })
        .catch(() => {
            console.log('通信に失敗しました');
        });
    }
    //フォームの入力値ステート
    const [formData, setFormData] = useState({userName:'', userEmail:'',userPassword:''});
    // 文字入力反映
    const inputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        formData[key] = value;
        // オブジェクトのコピー
        let data = Object.assign({}, formData);
        setFormData(data);
    }
    // 送信
    const createUser = async() => {
        //空を拒否
        if(formData == ''){
            return;
        }
        //入力値を投げる
        await axios
            .post('/api/users/create', {
                userName: formData.userName,
                userEmail: formData.userEmail,
                userPassword: formData.userPassword
            })
            .then((res) => {
                console.log(res.data);
                console.log("good!");
                setFormData({userName:'', userEmail:'',userPassword:''});
            })
            .catch(error => {
                console.log(error);
            });
    }
    return(
    <div className="signup">
        <a href="#" id="Back" onClick={CloseSignUp}>✖️</a>
        <h2>新規登録</h2>
        <form id="signup" >
            <p>名前</p>
            <input type="text" name="userName" value={formData.userName} onChange={inputChange}/>
            <p>メールアドレス</p>
            <input type="text" name="userEmail" value={formData.userEmail} onChange={inputChange} />
            <p>パスワード</p>
            <input type="text" name='userPassword' value={formData.userPassword} onChange={inputChange} />
            <input className="signBtn" href="#" type="submit" value="新規登録" onClick={createUser}/>
        </form>
            <button className="loginBtn">ログイン画面</button>
    </div>
    );
}

export function LoginForm (props) {
    return(
        <div className="LoginForm">
            <a href="#" className="Back">✖️</a>
            <h2>ログイン</h2>
            <form id="LoginForm">
                <p>メールアドレス</p>
                <input type="text" className="email"  name="userEmail" placeholder='eメールアドレス' onChange={props.inputChange}/>
                <p>パスワード</p>
                <input type="password" className="password" placeholder='パスワード' name='userPassword' onChange={props.inputChange}/>
                <input type="submit" value="ログイン" className="loginBtn" href="/" onClick={props.isLogin}/>
            </form>
        </div>
    );
    }
