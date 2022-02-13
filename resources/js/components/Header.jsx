
import React, { useState, useEffect } from 'react';
let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
 export function Header() {
    return(
        <header>
            <SearchForm route="posts/test" class="search topSearch searchForm searchForm1"/>
            <MenuList />
        </header>
    );
}
// 検索
 export function SearchForm (props) {
            return(
              <form action={props.route} method="#" className={props.class}>
                  <input type="text" placeholder="ここに入力" className="searchWord"/>
                  <input type="hidden" name="token" value={ csrf_token }/>
                  <input type="submit" value="検索" className="submit"/>
              </form>
            );

}

// メニュー
function MenuList(props) {
    return(
         <ul className="list">
            <li className="icon">
                <span id="user"><i className="fas fa-user fa-2x"></i></span>
            </li>
            <li className="icon">
                 <span id="shoppingCart"><i className="fas fa-shopping-cart fa-2x "></i></span>
            </li>
            <li className="icon">
                <span id="menu" ><i className="fas fa-bars fa-2x"></i></span>
            </li>
        </ul>
    );

}

// モーダル
export function Modal(props) {
    return(
        <section id="modal">
            <div id="close">✖️</div>
            <h3>新規登録・ログイン</h3>
            <p><a id="signupFormBtn">新規登録</a></p>
            <p><a id="ToLogin">ログイン</a></p>
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
         <h2>お買い物カゴにある商品<a href="#" id="shopBack">✖️</a></h2>
         {/* <form action="/total" method="get"> */}
         <ul id="ShopListUl">
             {/* <li className="shoppingList">test<button  name = result.name className="DeleteBtn">[X]</button></li> */}
         </ul>
         <input type="submit" value="お支払いへ" className="buyBtn"/>
         <input type="hidden" name="token" value={csrf_token}/>
         {/* </form> */}
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

