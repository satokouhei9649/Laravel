
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
        const [SearchData, setKeyWord] = useState({keyword:''});
        const [ResData, SetResData] = useState([]);
        useEffect(() => {
            CreateResSearch()
        },[ResData]);
        const inputChange = (e) => {
            const key = e.target.name;
            const word = e.target.value;
            SearchData[key] = word
            let keyword = Object.assign({},SearchData);
            setKeyWord(keyword);
            console.log(SearchData);
        }
        const Keysearch = async() => {
            SetResData([]);
            //入力値を投げる
            if (SearchData == '') {
                return;
            }
            axios.post('/api/food/category',{
                name: SearchData.keyword
            })
            .then(res => {
                console.log(res.data);
                SetResData(res.data);
                setKeyWord({keyword: ''});
            })
            .catch(error => {
                console.log(error);
                return;
            });
        }
        const CreateResSearch = () => {
                const InsertTarget = document.getElementById('Search');
                const list_Length = InsertTarget.childNodes.length;
                console.log(ResData);
                if (ResData == []) {
                    return;
                }
                if (!(list_Length == 0)) {
                    const Lists = InsertTarget.childNodes;
                    console.log(Lists);
                    Lists.forEach(el => {
                        el.remove();
                    });
                }
                ResData.forEach(el =>{
                    const div = document.createElement('div');
                    const h1 = document.createElement('h1');
                    const explain = document.createElement('p');
                    const price = document.createElement('p');

                    h1.textContent = el.name;
                    explain.textContent = el.explain;
                    price.textContent ="￥"+ el.praice +"円";
                    div.appendChild(h1);
                    div.appendChild(explain);
                    div.appendChild(price);
                    InsertTarget.appendChild(div);
                });
            }
            return(
              <form className={props.class}>
                  <input type="text" name="keyword" value={SearchData.keyword} onChange={inputChange} placeholder="ここに入力" className="searchWord"/>
                  {/* <input type="hidden" name="token" value={ csrf_token }/> */}
                  <a className="submit" onClick={() => {Keysearch()}}>検索</a>
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
         <ul id="ShopListUl"></ul>
         <input type="submit" value="お支払いへ" className="buyBtn"/>
         <input type="hidden" name="token" value={csrf_token}/>
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

