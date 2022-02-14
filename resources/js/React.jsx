
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Footer from './components/Footer.jsx';
import {SignUP,LoginForm} from './components/Signup_Login.jsx';
import {BacKGround,ShoppingCart,Modal, SearchForm,Header} from './components/Header.jsx';
import { NodeProps } from 'postcss';
import { contains } from 'micromatch';
import { name } from 'file-loader';
import { empty } from 'statuses';
import { result } from 'lodash';
    let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
     export class Index extends React.Component {
      constructor(props) {
        super(props);
        }
      render() {
        return (
            <div>
                <Header />
                <Modal />
                <ShoppingCart />
                <BacKGround class="background"/>
                <BacKGround class="cartbox"/>
                <SignUP/>
                <LoginForm />
                <Main />
                <Footer />
            </div>
        );
      }
    }
    export default Index;
    // 広告
    function Ad(props) {
        return(
        <section className="Ad">
            <ul className="sellAd">
                <a  href="/shopping" className="screen"><li>クーポン</li></a>
                <li className="screen">送料￥</li>
                <li className="screen">オスメメ</li>
                <li className="screen">セール</li>
            </ul>
            <button className="prev">&laquo;</button>
            <button className="next">&raquo;</button>
            <nav className="nav1"></nav>
        </section>
        );
    }
    // オススメ
    function Recommend(props) {
     const [Recommend, setRecommendData] = useState([]);
        useEffect(() =>{
            GetData();
        },[]);
        useEffect(() =>{
            const recommends= document.querySelectorAll('.recommend');
            console.log(recommends);
            const Sells = document.querySelectorAll('.sell');
            Observer(recommends,Sells);
        });
        const GetData = () => {
            axios
            .get('/api/food/recommend')
            .then(res => {
                setRecommendData(res.data);
                console.log(res.data);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
        }
         // Intersection Observer API
            const Observer = function() {
                const option = {
                    threshold: 0.6,
                    rootMargin: '0px 0px -10%'
                };

                for(let i=0; i < arguments.length; i++) {
                    const observer = new IntersectionObserver(check, option);
                    arguments[i].forEach(argument =>{
                        observer.observe(argument);
                    });
                    const array = arguments[i]
                    function check(D,obs) {
                        if (!D[0].isIntersecting) {
                            return;
                        }
                        AnimationMove(array);
                        obs.unobserve(D[0].target);
                    }
                }
            }
            const AnimationMove = function(Array){
                Array.forEach((el,index) => {
                    // 持ち時間
                    let delay =  Array.length * .0 +.3;
                    // 間隔
                    delay -= index * .5;
                    el.style.animationDelay = `${delay}s`;
                    el.classList.add('active');
                });
            }
            const RECOMMENDS = Recommend.map((el,index) => {
                index = index + 1;
                return(
                    <li className={props.class} key={el.name}>
                    {props.class == 'recommend' ? <span className='rank'>{index}</span> : ''}
                    <h1>{el.name}</h1>
                    {props.class == 'sell' ? <p>{el.praice * 0.7}</p> : <p>{el.praice}</p>}
                    </li>
                );
            });

            return(
                <span>
                <h2>{props.h2}</h2>
                <ul className={props.class + "s"}>
                    {RECOMMENDS}
                </ul>
            </span>
        );
    }
    // タブ
    function FoodMenu(props) {
        return(
            <div>
                <h2 className="Food">ジャンル・カテゴリーで検索</h2>
                <ul className="foodmenu">
                    <li><a href="#" className="foodIcon tab1" data-id="meat"><img src="/img/steak.png"/></a></li>
                    <li><a href="#" className="foodIcon tab2" data-id="fish"><i className="fas fa-fish fa-4x"></i></a></li>
                    <li><a href="#" className="foodIcon tab3" data-id="veg"><i className="fas fa-carrot fa-4x"></i></a></li>
                    <li><a href="#" className="foodIcon tab4" data-id="egg"><i className="fas fa-egg fa-4x"></i></a></li>
                    <li><a href="#" className="foodIcon tab5" data-id="milk"><i className="fas fa-apple-alt fa-4x"></i></a></li>
                    <li><a href="#" className="foodIcon tab6" data-id="drink"><i className="fas fa-wine-bottle fa-4x"></i></a></li>
                    <li><a href="#" className="foodIcon tab7" data-id="others"><i className="fas fa-bread-slice fa-4x"></i></a></li>
                </ul>
            </div>

        );
    }
    // 買い物カゴに追加機能
    const GotoCart = (e) => {
        const ShopListUl = document.getElementById('ShopListUl');
        const list = document.createElement('li');
        const DeleteBtn = document.createElement('button');
        DeleteBtn.textContent ="[X]";
        DeleteBtn.classList.add('DeleteBtn');
        DeleteBtn.setAttribute('name', e.target.name);
        list.textContent = e.target.name;
        list.classList.add('shoppingList');
        list.setAttribute('name', e.target.name);
        ShopListUl.appendChild(list);
        list.appendChild(DeleteBtn);
        // カゴから商品を削除
        DeleteBtn.onclick = (event) =>{
            const deleBtn = event.target;
            const TargetLi = deleBtn.parentNode;
            deleBtn.remove();
            TargetLi.remove();
        };
    }


    function FoodSection() {
        const [ResultsData, resData] = useState([]);
        const [RequestData, setData] = useState({name: ''});
            // 検索
        const search = async(word) => {
            RequestData.name = word;
            let data = Object.assign({}, RequestData);
            setData(data);
            //入力値を投げる
            axios.post('/api/food/category',{
                name: RequestData.name
            })
            .then(response => {
                resData(response.data);
                console.log(ResultsData);
            })
            .catch(error => {
                console.log(error);
            });
        }


        const titles = [
            {class: "active", id: "meat", bordercolor: "20px solid rgb(255, 103, 103)", h1:"お肉",lists:["豚肉","牛肉","鶏肉",]},
            {id: "fish", bordercolor: "20px solid rgb(48, 103, 255)", h1:"魚介類",lists:["魚","貝"]},
            {id: "veg", bordercolor: "20px solid rgb(95, 200, 95)", h1:"野菜",lists:["根野菜","葉物","大豆食品"]},
            {id: "egg", bordercolor: "20px solid rgb(255, 245, 103)", h1:"卵",lists:["鶏卵","魚卵"]},
            {id: "milk", bordercolor: "20px solid rgb(255, 202, 103)", h1:"乳製品",lists:["チーズ,ヨーグルト"]},
            {id: "drink", bordercolor: "20px solid rgb(228, 103, 103)", h1:"飲み物",lists:["酒","ジュース","お茶"]},
            {id: "others", bordercolor: "20px solid rgb(255, 98, 255)", h1:"その他",lists:["お菓子","調味料"]},
        ];
        const foodsection = titles.map((props,index) =>{
            const Lists = props.lists.map(list => {
                    return (
                            <li key={list}><a href='#search' onClick={() => {search(list)}}>{list}</a></li>
                    );
                })
                return(
                    <section className={"content "+ props.class} id={props.id} style={{border:props.bordercolor}} key={index}>
                        <h1>{props.h1}</h1>
                        <ul className="foodUl">
                            {Lists}
                        </ul>
                    </section>
                );
        });
        return(
            <div>
                {foodsection}
                {(() => {
                    if (RequestData == []) {
                        return;
                    }
                    const result = ResultsData.map(result => {
                        return(
                            <div id="search" key={result.name}>
                                <h1>{result.name}</h1>
                                <p>{result.explain}</p>
                                <p>¥ {result.praice}円</p>
                                <button className='ResToCart' name={result.name} onClick={GotoCart}>カートに入れる</button>
                            </div>
                        );
                    })
                    return result;
                })()}
            </div>
        );
    }

    // function Test() {
    //     const [TestData, setTestData] = useState([]);
    //     // 送信
    // const test = async() => {
    //     //入力値を投げる
    //     axios
    //         .post('/api/food/category',{
    //             name: "豚肉"
    //         })
    //         .then(response => {
    //             setTestData(response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }
    // const Results = TestData.map(test => {
    //     return(
    //         <div key={test.name}>
    //             <h1>{test.name}</h1>
    //             <p>{test.explain}</p>
    //             <p>¥ {test.praice}円</p>
    //         </div>
    //     );
    // })
    // return(
    // <div>
    //     <button onClick={test}>test</button>
    //     {Results}
    // </div>

    // );

    // }

    // Top画面
    function Main() {
        return(
    <div>
        <BacKGround  text="topページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページです" />
        <SearchForm route="#" class="search" />
        <Ad />
        <Recommend h2="オススメ商品 ・ 売れ筋" class="recommend"/>
        <Recommend h2="セール" class="sell"/>
        <FoodMenu />
        <FoodSection />
    </div>
        );
    }





