
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Reflesh} from '../React';
let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
const AnimationOpen = function() {
    for(let i=0; i < arguments.length; i++) {
        arguments[i].classList.remove('hidden');
        arguments[i].classList.add('open');
    }
}
const AnimationClose = function() {
    for(let i=0; i < arguments.length; i++) {
        arguments[i].classList.remove('open');
        arguments[i].classList.add('hidden');
    }
}
 export function Header(props) {
    return(
        <header>
            <SearchForm route="posts/test" class="search topSearch searchForm searchForm1" />
            <MenuList isLogin={props.isLogin}/>
        </header>
    );
}
// 検索
 export function SearchForm (props) {
        const [KeyWord, setKeyWord] = useState({keyword:''});
        const [ResData, SetResData] = useState([]);

            useEffect(() => {
                CreateResults()
            },[ResData]);

            const inputChange = (e) => {
                const key = e.target.name;
                const word = e.target.value;
                KeyWord[key] = word
                let keyword = Object.assign({},KeyWord);
                setKeyWord(keyword);
                console.log(KeyWord);
            }

            const Keysearch = async() => {
                SetResData([]);
                //入力値を投げる
                if (KeyWord == '') {
                    return;
                }
                axios.post('/api/food/category',{
                    name: KeyWord.keyword
                })
                .then(res => {
                    SetResData(res.data);
                    setKeyWord({keyword: ''});
                })
                .catch(error => {
                    console.log(error);
                    return;
                });
            }
            // 検索結果表示
            const CreateResults = () => {
                    if (ResData == []) {
                        return;
                    }
                    Reflesh();
                    const CategoryResults = document.querySelectorAll('.SearchResults');
                    console.log(CategoryResults);
                    CategoryResults.forEach(el => {
                        el.remove();
                    });
                    // 結果表示
                ResData.forEach(el =>{
                    const InsertTarget = document.getElementById('Search');
                    const div = document.createElement('div');
                    const h1 = document.createElement('h1');
                    const explain = document.createElement('p');
                    const price = document.createElement('p');
                    const button = document.createElement('button');

                    h1.textContent = el.name;
                    explain.textContent = el.explain;
                    price.textContent = "￥"+ el.praice +"円";
                    button.textContent = "カートに入れる" ;
                    div.classList.add('SearchResults');
                    button.classList.add('ResToCart');
                    div.appendChild(h1);
                    div.appendChild(explain);
                    div.appendChild(price);
                    div.appendChild(button);
                    InsertTarget.appendChild(div);
                });
            }
                return(
                    <form className={props.class}>
                  <input type="text" name="keyword" value={KeyWord.keyword} onChange={inputChange} placeholder="ここに入力" className="searchWord"/>
                  {/* <input type="hidden" name="token" value={ csrf_token }/> */}
                  <a className="submit" onClick={() => {Keysearch()}}>検索</a>
              </form>
            );
        }
const OpenSignUP = () => {
    const signup = document.querySelector('.signup');
    const backGround = document.querySelector('.background');
    AnimationOpen(signup,backGround);
}
const OpenLoginForm = () => {
    const LoginForm = document.querySelector('.LoginForm');
    AnimationOpen(LoginForm);
}
const OpenModal = () => {
    const modal = document.getElementById('modal');
    AnimationOpen(modal);
}
export const CloseSignUp =() => {
    const signup = document.querySelector('.signup');
    const backGround = document.querySelector('.background');
    AnimationClose(signup,backGround);
}
const CloseModal = () => {
    const modal = document.getElementById('modal');
    AnimationClose(modal);
}
const OpenShop = () => {
    const cartBox = document.querySelector('.cartbox');
    const cart = document.querySelector('.cart');
    const backGround = document.querySelector('.background');
    AnimationOpen(cartBox,cart,backGround);
}
const CloseShop = () => {
    const cartBox = document.querySelector('.cartbox');
    const cart = document.querySelector('.cart');
    const backGround = document.querySelector('.background');
    AnimationClose(cartBox,cart,backGround);
}

// メニュー
 export function MenuList(props) {
    return(
         <ul className="list">
           {props.isLogin == true ?
           <li className="icon">
                <span id="user"><i className="fas fa-user fa-2x"></i></span>
            </li>: ''}
            <li className="icon">
                 <span id="shoppingCart" onClick={OpenShop}><i className="fas fa-shopping-cart fa-2x "></i></span>
            </li>
            <li className="icon">
                <span id="menu" onClick={OpenModal}><i className="fas fa-bars fa-2x"></i></span>
            </li>
        </ul>
    );

}

// モーダル
export function Modal(props) {
    return(
        <section id="modal">
            <div id="close" onClick={CloseModal}>✖️</div>
            <h3>新規登録・ログイン</h3>
            <p><a id="signupFormBtn" onClick={OpenSignUP}>新規登録</a></p>
            <p><a id="ToLogin" onClick={OpenLoginForm}>ログイン</a></p>
            <h3>お買い物</h3>
            <p><a href=".Food">ジャンルで探す</a></p>
            <p><a>値段で探す</a></p>
        </section>
    );
}
// 買い物カゴ

 export function ShoppingCart(props) {
     return(
     <div className="cart">
        <h2>お買い物カゴにある商品<a href="#" id="shopBack" onClick={CloseShop}>✖️</a></h2>
        <form action='/total' method='get'>
         <ul id="ShopListUl">
             <input type="hidden"value="test" name="test"/>
         </ul>
         <input type="submit" value="お支払いへ" className="buyBtn"/>
         <input type="hidden" name="token" value={csrf_token}/>
        </form>
        <button>戻る</button>
     </div>
     );
    }

// 背景
 export function BacKGround(props) {
    return(
        <div className={props.class}>{props.text}</div>
    );
}

