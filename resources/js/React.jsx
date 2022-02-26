
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './components/Footer.jsx';
import {SignUP,LoginForm} from './components/Signup_Login.jsx';
import {BacKGround,ShoppingCart,Modal,Header,AnimationClose} from './components/Header.jsx';
    let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
     export class Index extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userEmail: '',
            userPassword: '',
            isLogin: false
        }
        console.log(this.state);
        this.isLogin = this.isLogin.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.Logout = this.Logout.bind(this);
    }
    // ログイン機能
    isLogin() {
        console.log(this.state);
        axios
        .post('/api/users/login', {
            userEmail: this.state.userEmail,
            userPassword: this.state.userPassword,
        })
        .then((res) => {
            console.log(res.data);
            this.setState({
                userName: res.data[0].userName,
                userEmail: res.data[0].userEmail,
                userPassword: res.data[0].userPassword,
                isLogin: true});
        })
        .catch(error => {
            console.log(error);
        });
        const modal = document.getElementById('modal');
        const backGround = document.querySelector('.background');
        AnimationClose(modal,backGround);
    }
    // ログアウト
    Logout() {
        this.setState({
            userName: '',
            userEmail: '',
            userPassword: '',
            isLogin: false
        });
        const modal = document.getElementById('modal');
        modal.classList.remove('open');
        console.log(this.state);
    }
    inputChange = (e) => {
        const key = e.target.name;
        const word = e.target.value;
        this.setState(prevState => {
            prevState[key] = word;
        });
        console.log(this.state);
    }
      render() {
        return (
            <div>
                <Header isLogin={this.state.isLogin}/>
                <Modal isLogin={this.state.isLogin} Logout={this.Logout}/>
                <ShoppingCart />
                <BacKGround class="background"/>
                <BacKGround class="cartbox"/>
                {this.state.isLogin == false ? <SignUP/> : ''}
                {this.state.isLogin == false ? <LoginForm user={this.state} isLogin={this.isLogin} inputChange={this.inputChange}/>: ''}
                <Main />
                <Footer />
            </div>
        );
      }
    }
    export default Index;

const Slide = () => {
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const Ad = document.querySelector('.sellAd');
    const screens = Ad.children;
    const dots = [];
    let count = 0;
    nextBtn.addEventListener('click', () => {
        count++;
        dotsStatus();
        btnStaus();
        moveScreen(screens,Ad);
    });
    prevBtn.addEventListener('click', () => {
        count--;
        dotsStatus();
        btnStaus();
        moveScreen(screens,Ad);
    });
    // 矢印の表示
    function btnStaus() {
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
        if (count == 0) {
            prevBtn.classList.add('hidden');
        }
        if (count == screens.length -1) {
            nextBtn.classList.add('hidden');
        }
    }
// スライド
    function moveScreen(Array1,Array2) {
        const Width = Array1[0].getBoundingClientRect().width;
        Array2.style.transform = `translateX(${-1 * Width * count}px)`;
    }
    function setDots() {
        for (let i = 0; i < screens.length; i++) {
            const button = document.createElement('button');
            button.addEventListener('click', () => {
                count = i;
                dotsStatus();
                btnStaus();
                moveScreen(screens,Ad);
            });
            dots.push(button);
            document.querySelector('nav').appendChild(button).classList.add('screenBtn');
        }
        dots[0].classList.add('current');
    }

    function dotsStatus() {
        dots.forEach( dot => {
            dot.classList.remove('current');
        });
        dots[count].classList.add('current');
    }
    btnStaus();
    setDots();
}
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
                    <button className='ToCart' name={el.name} value={el.praice} onClick={GotoCart}>カートに入れる</button>
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
    // 買い物カゴに追加機能
   export const GotoCart = (e) => {
        const ShopListUl = document.getElementById('ShopListUl');
        const list = document.createElement('li');
        const DeleteBtn = document.createElement('button');
        const input = document.createElement('input');
        input.setAttribute('type','hidden');
        input.setAttribute('name',e.target.name);
        input.setAttribute('value',e.target.value);
        DeleteBtn.textContent ="[X]";
        DeleteBtn.classList.add('DeleteBtn');
        list.textContent = e.target.name;
        list.classList.add('shoppingList');
        ShopListUl.appendChild(list);
        list.appendChild(input);
        list.appendChild(DeleteBtn);
        // カゴから商品を削除
        DeleteBtn.onclick = Remove;
    }
  export const Remove = (e) =>{
        const TargetLi = e.target.parentNode;
        TargetLi.remove();
    };
   export const Reflesh = () => {
        const InsertTarget = document.getElementById('Search');
            const Lists = InsertTarget.childNodes;
            Lists.forEach(el => {
                el.remove();
            });
    }
    // タブメニュー
    const CreateTab = function(Array1,Array2) {
        Array1.forEach(el => {
            el.addEventListener('click', e => {
                e.preventDefault();
                Array1.forEach(icon => {
                    icon.classList.remove('active');
                });
                el.classList.add('active');
                Array2.forEach(el => {
                    el.classList.remove('active');
                });
                document.getElementById(el.dataset.id).classList.add('active');
            });
        });
       }
    function FoodSection() {
        const [RequestData, setData] = useState({name: ''});
        const [ResultsData, resData] = useState([]);
        useEffect(() => {
            const menuIcons = document.querySelectorAll('.foodIcon');
            const menuContents = document.querySelectorAll('.content');
            CreateTab(menuIcons,menuContents);
        })
        useEffect(() => {
            Reflesh();
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
                            <li key={list}><a href='#Search' onClick={() => {search(list)}}>{list}</a></li>
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
                <div id="Search"></div>
                    {(() => {
                        if (RequestData == []) {
                            return;
                        }
                        const result = ResultsData.map(result => {
                            return(
                                <div className='SearchResults' key={result.name}>
                                    <h1>{result.name}</h1>
                                    <p>{result.explain}</p>
                                    <p>¥ {result.praice}円</p>
                                    <button className='ResToCart' name={result.name} value={result.praice} onClick={GotoCart}>カートに入れる</button>
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
    function Main(props) {
        return(
        <div>
            <BacKGround class="Main" />
            <Ad />
            <Recommend h2="オススメ商品 ・ 売れ筋" class="recommend"/>
            <Recommend h2="セール" class="sell"/>
            <FoodMenu />
            <FoodSection />
        </div>
        );
    }





