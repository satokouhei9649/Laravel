import React, { useState, useEffect } from 'react';
import axios from 'axios';
// 新規登録
 export function SignUP(props) {
    //  ステート
    const [Users, setPosts] = useState([]);
    //フォームの入力値を管理するステートの定義
    const [formData, setFormData] = useState({userName:'', userEmail:'',userPassword:''});
    console.log(formData);
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
        console.log(Users);
    // 文字入力反映
    const inputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        formData[key] = value;
        // オブジェクトのコピー
        let data = Object.assign({}, formData);
        setFormData(data);
        console.log(data);
    }
    // 送信
    const createUser = async() => {
        //空を拒否
        if(formData == ''){
            return;
        }
        //入力値を投げる
        await axios
            .post('/api/user/create', {
                userName: formData.userName,
                userEmail: formData.userEmail,
                userPassword: formData.userPassword
            })
            .then((res) => {
                console.log(res);
                const tempUsers = Users;
                tempUsers.push(res.data);
                setPosts(tempUsers);
                setFormData('');
            })
            .catch(error => {
                console.log(error);
            });
    }


    return(
    <div className="signup">
        <a href="#" id="Back">✖️</a>
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

export function LoginForm () {
        return(
            <div className="LoginForm">
                <a href="#" className="Back">✖️</a>
                <h2>ログイン</h2>
                <form route="/user/login" method="post" id="LoginForm">
                    <p>メールアドレス</p>
                    <input type="text" className="email"/>
                    <p>パスワード</p>
                    <input type="text" className="password"/>
                    <input type="submit" value="ログイン" className="loginBtn"/>
                </form>
            </div>
        );
    }
