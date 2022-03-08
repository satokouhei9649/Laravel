
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './components/Footer.jsx';
import {SignUP,LoginForm} from './components/Signup_Login.jsx';
import {BacKGround,ShoppingCart,Modal,Header,AnimationClos,InfoNumber} from './components/Header.jsx';
import{Slide,Observer,GotoCart,CreateTab} from './Module'
    let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
     export function Index (props) {
        return (
            <div>
                <Header isLogin={props.isLogin} count={props.count}/>
                {props.isLogin == false ? <SignUP/> : ''}
                {props.isLogin == false ? <LoginForm user={props.user} Login={props.Login} inputChange={props.inputChange} />: ''}
                <ShoppingCart />
                <BacKGround class="background"/>
                <BacKGround class="cartbox"/>
                <BacKGround class="flashMessage" Ref ={props.Ref}/>
                <Modal isLogin={props.isLogin} Logout={props.Logout}/>
                <Main countpush={props.countpush}/>
                <Footer />
                <InfoNumber />
            </div>
        );
    //   }
    }
    export default Index;

    // 広告
    function Ad(props) {
        useEffect(() => {
            Slide();
        },[])
        return(
        <section className="Ad">
            <ul className="sellAd">
                <a className="screen"><li>クーポン</li></a>
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
            const Sells = document.querySelectorAll('.sell');
            Observer(recommends,Sells);
        });
        // 取得
        const GetData = () => {
            axios
            .get('/api/food/recommend')
            .then(res => {
                setRecommendData(res.data);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
        }

            // 取得したDataをmap
            const RECOMMENDS = Recommend.map((el,index) => {
                index = index + 1;
                return(
                    <li className={props.class} key={el.name}>
                    <h1> {props.class == 'recommend' ? <span className='rank'>{index}</span> : ''}{el.name}</h1>
                    {props.class == 'sell' ? <p>{ "¥" + el.praice * 0.7}</p> : <p>{ "¥" + el.praice}</p>}
                    <button className='ToCart' name={el.name} value={el.praice} onClick={props.countpush}>カートに入れる</button>
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
                    <li><a className="foodIcon tab1" data-id="meat"><img src="/img/steak.png"/></a></li>
                    <li><a className="foodIcon tab2" data-id="fish"><i className="fas fa-fish fa-4x"></i></a></li>
                    <li><a className="foodIcon tab3" data-id="veg"><i className="fas fa-carrot fa-4x"></i></a></li>
                    <li><a className="foodIcon tab4" data-id="egg"><i className="fas fa-egg fa-4x"></i></a></li>
                    <li><a className="foodIcon tab5" data-id="milk"><i className="fas fa-apple-alt fa-4x"></i></a></li>
                    <li><a className="foodIcon tab6" data-id="drink"><i className="fas fa-wine-bottle fa-4x"></i></a></li>
                    <li><a className="foodIcon tab7" data-id="others"><i className="fas fa-bread-slice fa-4x"></i></a></li>
                </ul>
            </div>

        );
    }

//    export const Reflesh = () => {
//         const Target = document.querySelector('.Results-wrapper');
//             Target.remove();
//     }
//    export const Reflesh = () => {
//         const InsertTarget = document.getElementById('Search');
//             const Lists = InsertTarget.childNodes;
//             Lists.forEach(el => {
//                 el.remove();
//             });
//     }


    function FoodSection(props) {
        const [RequestData, setData] = useState({name: ''});
        const [ResultsData, resData] = useState([]);
        useEffect(() => {
            const menuIcons = document.querySelectorAll('.foodIcon');
            const menuContents = document.querySelectorAll('.content');
            CreateTab(menuIcons,menuContents);
        })
        useEffect(() => {
            // Reflesh();
        },[ResultsData])
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
                            <li key={list}><a href='#SearchList' onClick={() => {search(list)}}>{list}</a></li>
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
            <div id='FoodSection'>
            {foodsection}
                <div id="SearchList"></div>
                    <div className='Results-wrapper'>
                        {(() => {
                            const result = ResultsData.map(result => {
                                return(
                                    <div className='SearchResults' key={result.name}>
                                        <h1>{result.name}</h1>
                                        <p>{result.explain}</p>
                                        <p>¥ {result.praice}円</p>
                                        <button className='ResToCart' name={result.name} value={result.praice}
                                        onClick={props.countpush}>カートに入れる</button>
                                    </div>
                                );
                            })
                            return result;
                        })()}
                    </div>
            </div>
        );
    }

    // Top画面
    function Main(props) {
        return(
        <div>
            <BacKGround class="Main" />
            <Ad />
            <Recommend h2="オススメ商品 ・ 売れ筋" class="recommend" countpush = {props.countpush}/>
            <Recommend h2="セール" class="sell" countpush = {props.countpush}/>
            <FoodMenu />
            <FoodSection  countpush = {props.countpush}/>
        </div>
        );
    }





