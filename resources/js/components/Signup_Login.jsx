import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Close,Open } from '../Module/Module';

// 新規登録
 export function SignUP(props) {
    //フォームの入力値ステート
    const [formData, setFormData] = useState({userName:'', userEmail:'',userPassword:''});
    const [ErrorData, setError] = useState([]);
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
                console.log(error.response.data.errors);
                setError(error.response.data.errors);
            });
    }
    return(
    <div className="signup">
        <a href="/" id="Back" name="signup" onClick={Close}>✖️</a>
        <h2>新規登録</h2>
        <div id="signup" >
            <p>名前</p>
            {ErrorData == [] ? '':<p className='error'>{ErrorData.userName}</p>}
            <input type="text" name="userName" value={formData.userName} onChange={inputChange}/>
            <p>メールアドレス</p>
            {ErrorData == [] ? '':<p className='error'>{ErrorData.userEmail}</p>}
            <input type="text" name="userEmail" value={formData.userEmail} onChange={inputChange} />
            <p>パスワード</p>
            {ErrorData == [] ? '':<p className='error'>{ErrorData.userPassword}</p>}
            <input type="text" name='userPassword' value={formData.userPassword} onChange={inputChange} />
            <input className="signBtn" href="/" type="submit" value="新規登録" onClick={createUser}/>
        </div>
            <button className="loginBtn"name='login' onClick={Open}>ログイン画面</button>
    </div>
    );
}

// ログイン画面
export function LoginForm (props) {
    return(
        <div className="LoginForm">
            <a href="#" className="Back" name="login" onClick={Close}>✖️</a>
                <h2>ログイン</h2>
            <div id='LoginForm'>
                <p>メールアドレス</p>
                <input type="text" className="email"  name="userEmail" placeholder='eメールアドレス' onChange={props.inputChange}/>
                <p>パスワード</p>
                <input type="current-password" className="password" placeholder='パスワード' name='userPassword' onChange={props.inputChange}/>
                <input type="submit" value="ログイン" className="loginBtn" onClick={props.Login}/>
            </div>
        </div>
    );
    }
