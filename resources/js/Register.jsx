import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
 export function Register() {
    //フォームの入力値ステート
    const [Data, setData] = useState({name:'', explain:'',praice:'',photo:''});
    // 文字入力反映
    const inputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        Data[key] = value;
        // オブジェクトのコピー
        let data = Object.assign({}, Data);
        setData(data);
        console.log(Data);
    }
    const upload = function (e) {
        // 画像ファイル取得
        const files = document.querySelector('#photo');
        console.log(files);
        const fileObject = files.files[0];
        console.log(fileObject);
        const reader = new FileReader();
        reader.readAsDataURL(fileObject);
        reader.onload = (event) => {
            // base64に変換
            const base64Text = event.currentTarget.result;
            const base64 = event.currentTarget.result.split(',')[1];
            document.querySelector('#uploadImageArea').innerHTML = `<img src="${base64Text}" width="100%" />`;
            const key = e.target.name;
            Data[key] = base64;
            let data = Object.assign({}, Data);
            setData(data);
            console.log(Data);
        }
        // エラー表示
        // if (typeof fileObject === "undefined") {
        //     console.error("none, fileObject");
        //     return;
        //   }

    }
    // 送信
    const RegisterFood = () => {
        //空を拒否
        if(Data == ''){
            return;
        }
        //入力値を投げる
        axios
            .post('/api/food/register', {
                name: Data.name,
                explain: Data.explain,
                praice: Data.praice,
                photo: Data.photo
            })
            .then((res) => {
                console.log(res.data);
                console.log("good!");
                setData({name:'', explain:'',praice:''});
            })
            .catch(error => {
                console.log(error);
            });
            console.log('error');
    }
    return(
        <section id="register">
            <h2>商品登録</h2>
                <p>商品名</p>
                <input className='registerName' type="text" name="name" value={Data.name} onChange={inputChange}/>
                <p>商品概要</p>
                <textarea className='registerText' name="explain" value={Data.explain} onChange={inputChange} />
                <p>価格</p>
                <input className='registerPraice' type="text" name='praice' value={Data.praice} onChange={inputChange} />
                <input className='registerPraice' type="file" name='photo' id='photo' onChange={upload}/>
                <input className='registerBtn' type="submit" value="登録" onClick={RegisterFood}/>
                <div id="uploadImageArea"></div>
                <Link to='/'>戻る</Link>
        </section>
    );
}
