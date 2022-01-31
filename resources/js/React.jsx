
    import React from 'react';
    import ReactDOM from 'react-dom';
    import Footer from './components/Footer.jsx';
    import {SingUP,LoginForm} from './components/Signup_Login.jsx';
    import {BacKGround,ShoppingCart,Modal, SearchForm,Header,Input} from './components/Header.jsx';
    let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
    const Users = [{userName: "root",userPassword: "root",userEmail: "root",isLogin: false}];
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
                <SingUP/>
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
                <a  href="/" className="screen"><li>クーポン</li></a>
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
        return(
            <span>
                <h2>{props.h2}</h2>
                <ul className={props.class + "s"}>
                    <li className={props.class}><span className="rank">1</span>オススメ</li>
                    <li className={props.class}><span className="rank">2</span>オススメ</li>
                    <li className={props.class}><span className="rank">3</span>オススメ</li>
                    <li className={props.class}><span className="rank">4</span>オススメ</li>
                    <li className={props.class}>セールス</li>
                    <li className={props.class}>セールス</li>
                    <li className={props.class}>セールス</li>
                    <li className={props.class}>セールス</li>
                    <li className={props.class}>セールス</li>
                    <li className={props.class}>セールス</li>
                    <li className={props.class}>セールス</li>
                </ul>
            </span>
        );
    }
    // タブ
    function FoodMenu(props) {
        return(
            <div>
                <h2 className="Food">ジャンルで探す</h2>
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
    // カテゴリー検索
    function FoodSection() {
        const titles = [
            {class: "active", id: "meat", bordercolor: "20px solid rgb(255, 103, 103)", h1:"お肉"},
            {id: "fish", bordercolor: "20px solid rgb(48, 103, 255)", h1:"魚介類"},
            {id: "veg", bordercolor: "20px solid rgb(95, 200, 95)", h1:"野菜"},
            {id: "egg", bordercolor: "20px solid rgb(255, 245, 103)", h1:"卵"},
            {id: "milk", bordercolor: "20px solid rgb(255, 202, 103)", h1:"乳製品"},
            {id: "drink", bordercolor: "20px solid rgb(228, 103, 103)", h1:"飲み物"},
            {id: "others", bordercolor: "20px solid rgb(255, 98, 255)", h1:"その他"},
        ];
         const foodsection = titles.map(props =>{
        return(
            <section className={"content "+ props.class} id={props.id} style={{border:props.bordercolor}} key={props.id}>
            <h1>{props.h1}</h1>
                <ul className="foodUl">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
         );
        });
        return(
            <div>
                {foodsection}
            </div>
        );
    }

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
    // const domContainer = document.querySelector('.container');
    // ReactDOM.render(<Index />, domContainer);




