import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Open,Close,AnimationOpen} from '../Module';
// import {Reflesh} from '../React';
let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
 export function Header(props) {
    return(
        <header>
            <h2 className='title'>Food loss</h2>
            <SearchForm route="posts/test" class="searchForm" />
            <MenuList isLogin={props.isLogin} count={props.count}/>
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
                const InsertTarget = document.getElementById('SearchList');
                    // Reflesh();
                    // const CategoryResults = document.querySelectorAll('.SearchResults');
                    // console.log(CategoryResults);
                    // CategoryResults.forEach(el => {
                    //     el.remove();
                    // });
                    const targets = InsertTarget.childNodes;
                    if ((!targets.length == 0)) {
                        targets.forEach(el => {
                            el.remove();
                        })
                    }
                    // 結果表示
                ResData.forEach(el =>{
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
                  <a className="submit" onClick={() => {Keysearch()}}>検索</a>
              </form>
            );
        }


const OpenModal = () => {
    const modal = document.getElementById('modal');
    modal.classList.remove('open');
    AnimationOpen(modal);
}

const OpenShop = () => {
    const cartBox = document.querySelector('.cartbox');
    const cart = document.querySelector('.cart');
    const backGround = document.querySelector('.background');
    AnimationOpen(cartBox,cart,backGround);
}

// メニュー
 export function MenuList(props) {
    return(
         <ul className="list">
             {props.isLogin == true ?
           <li className="icon">
                <span id="user"><i className="fas fa-user fa-2x"></i></span>
            </li>: ''}
            { props.data == 'shopping'? '' :
            <li className="icon">
               {(() => {
                    return(
                        <div className='CartCount'>{props.count}</div>
                    )
                })()}
               <span id="shoppingCart" onClick={OpenShop}><i className="fas fa-shopping-cart fa-2x "></i></span>
            </li> }
            <li className="icon">
                <span id="menu" onClick={OpenModal}><i className="fas fa-bars fa-2x"></i></span>
            </li>
        </ul>
    );

}
// お問い合わせ
 export function InfoNumber() {
    const [InfoData,setInfoData] = useState({InfoNumber:''});
    const [ResData,setData] = useState([]);
    const InfoNumberSearch = async() => {
        //入力値を投げる
        if (InfoData.InfoNumber == '') {
            return;
        }
        axios.post('/api/order/info',{
            InfoNumber: InfoData.InfoNumber
        })
        .then(res => {
            setData(res.data);
            console.log(ResData);
        })
        .catch(error => {
            console.log(error);
            return;
        });
    }
    const inputChange = (e) => {
        const key = e.target.name;
        const word = e.target.value;
        InfoData[key] = word;
        let data = Object.assign({},InfoData);
        setInfoData(data);
        console.log(InfoData);
    }
    let count = ResData.length;
    return(
        <div className='InfoNumberForm'>
                <h1>お問い合わせ</h1>
            <div className='InfoNumber-wrapper'>
                <input type="text" name='InfoNumber' placeholder='お問い合わせ番号を入力してください'onChange={inputChange}  className="InfoNumberInput" />
                <button  className="submit" onClick={InfoNumberSearch}>検索</button>
                {(() => {

                    const results = ResData.map(result =>{
                        return(
                            <div key={result.id} className='ResultsFromInfoNumber'>
                                <p className='GoodsName'> 品名: {result.goods}</p>
                                <p>お問い合わせ No.<span className='ResultsNumber'>{result.InfoNumber}</span></p>
                            </div>
                        );
                    })
                    return (
                        <section id='InfoNumberResults'>
                            {results}
                        </section>
                        );
                })()}
                <p>{count}件見つかりました</p>
                <Link to='/' className='BackBtn OrderBack' name="infonumber" onClick={Close}>戻る</Link>
            </div>
        </div>
    );
}

// モーダル
export function Modal(props) {
    return(
        <section id="modal">
            <div id='close'><a name="modal" onClick={Close}>✖️</a></div>
            {props.isLogin == false ? <h3>新規登録・ログイン</h3> :''}
            {props.isLogin == false ? <p><a id="signupFormBtn"  name="signup" onClick={Open}>新規登録</a></p>: ''}
            {props.isLogin == false ? <p><a id="ToLogin"  name="login" onClick={Open}>ログイン</a></p>: ''}
            {props.isLogin == false ?  '' : <p><a onClick={props.Logout}>ログアウト</a></p>}
            <h3>お買い物</h3>
            <p><a href='#FoodSection' name="modal" onClick={Close}>ジャンルで探す</a></p>
            <p> <a name="infonumber" onClick={Open}>お問い合わせ</a></p>
        </section>
    );
}
// 買い物カゴ

 export function ShoppingCart(props) {
     return(
     <div className="cart">
        <h2>お買い物カゴにある商品<a href="#" id="shopBack"name="shop" onClick={Close}>✖️</a></h2>
        <form action='/total' method='get'>
         <ul id="ShopListUl">
         </ul>
            <input type="submit" value="お支払いへ" className="buyBtn"/>
            <input type="hidden" name="token" value={csrf_token}/>
        </form>
        <button className='BackBtn' name='shop' onClick={Close}>戻る</button>
     </div>
     );
    }

// 背景
 export function BacKGround(props) {
    return(
        <div className={props.class} onClick={() => {
            const backGround = document.querySelector('.background');
            AnimationClose(backGround);
        }}>
        {props.class == "Main"? <h1>Food Loss</h1>:''}
        {props.class == "Main"? <p>少しでも    廃棄処分する量を減らそう</p>:''}
        {props.class == "flashMessage"? <p>カートに入れました！！</p>:''}
        </div>
    );
}

