import {Input} from './Header.jsx';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// 新規登録
 export function SingUP(props) {
    const [posts, setPosts] = useState([]);
    //フォームの入力値を管理するステートの定義
    const [formData, setFormData] = useState({name:'', content:''});
    console.log(formData);
    useEffect(() => {
        getPostsData();
    },[])
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
    const inputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        formData[key] = value;
        let data = Object.assign({}, formData);
        setFormData(data);
        console.log(formData.name);
    }

    return(
    <div className="signup">
        <a href="#" id="Back">✖️</a>
        <h2>新規登録</h2>
        <form id="signup" >
            <p>名前</p>
            <Input type="text" name="name" value={formData.name} onChange={inputChange}/>
            <p>メールアドレス</p>
            <Input type="text" name="content" value={formData.content} onChange={inputChange} />
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
