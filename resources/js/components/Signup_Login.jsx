import React, { useState, useEffect } from 'react';
import axios from 'axios';
// 新規登録
 export function SingUP(props) {
    const [posts, setPosts] = useState([]);
    //フォームの入力値を管理するステートの定義
    const [formData, setFormData] = useState({title:'', body:''});
    console.log(formData);
    useEffect(() => {
        getPostsData();
    },[])
    const getPostsData = () => {
        axios
            .get('/api/posts')
            .then(response => {
                setPosts(response.data);
                console.log(response.data);
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
    }
    // createmethodに送信
    const createPost = async() => {
        //空を拒否
        if(formData == ''){
            return;
        }
        //入力値を投げる
        await axios
            .post('/api/post/create', {
                title: formData.title,
                body: formData.body
            })
            .then((res) => {
                console.log(res);
                const tempPosts = posts
                tempPosts.push(res.data);
                setPosts(tempPosts)
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
            <input type="text" name="title" value={formData.title} onChange={inputChange}/>
            <p>メールアドレス</p>
            <input type="text" name="body" value={formData.body} onChange={inputChange} />
            <input className="signBtn" href="#" type="submit" value="新規登録" onClick={createPost}/>
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
