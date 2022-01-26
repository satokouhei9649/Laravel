'use strict';
// const { functionsIn } = require("lodash");
import {BrowserRouter, Route} from 'react-router-dom'
let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
const Users = [{userName: "root",userPassword: "root",userEmail: "root",isLogin: false}];
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userName:'',
        userPassword: '',
        userEmail: '',
        isLogin: false
    }
this.AddInfo = this.AddInfo.bind(this);
}
    AddInfo(e) {
        console.log(e);
        this.setState({
            userName:  e.target.value,
            userPassword:  e.target.value,
            useremail:  e.target.value
    })
}
  render() {
    return (
        <div>
            <Header />
            <Modal />
            <ShoppingCart />
            <BacKGround class="background"/>
            <BacKGround class="cartbox"/>
            <SingUP
            userName={this.state.userName}
            userEmail={this.state.userEmail}
            userPassword={this.state.userPassword}
            AddInfo={this.AddInfo}/>
            <LoginForm />
            <Main />
            <Footer />
        </div>
    );
  }
}
// 新規登録
function SingUP(props) {
    return(
    <div className="signup">
        <a href="#" id="Back">✖️</a>
        <h2>新規登録</h2>
        <form id="signup" >
            <p>名前</p>
            <Input type="text" name="name" value={props.userName} onChange={props.AddInfo}/>
            <p>メールアドレス</p>
            <Input type="text" name="email" value={props.userEmail} onChange={props.AddInfo}/>
            <p>パスワード</p>
            <Input type="text" name="password" value={props.userPassword} onChange={props.AddInfo}/>
            <Input className="signBtn" type="submit" value="新規登録"/>
        </form>
            <button className="loginBtn">ログイン画面</button>
    </div>
    );
}

function LoginForm () {
        return(
            <div className="LoginForm">
                <a href="#" className="Back">✖️</a>
                <h2>ログイン</h2>
                <form route="/user/login" method="post" id="LoginForm">
                    <p>メールアドレス</p>
                    <Input type="text" class="email"/>
                    <p>パスワード</p>
                    <Input type="text" class="password"/>
                    <Input type="submit" value="ログイン" className="loginBtn"/>
                </form>
            </div>
        );
    }
// ヘッダー
function Header() {
    return(
        <header>
            <SearchForm route="posts/test" class="search topSearch searchForm searchForm1"/>
            <MenuList />
        </header>
    );
}
// 検索
function SearchForm (props) {
            return(
              <form action={props.route} method="#" className={props.class}>
                  <Input type="text" text="ここに入力" className="searchWord"/>
                  <Input type="hidden" name="token" value={ csrf_token }/>
                  <Input type="submit" value="検索" className="submit"/>
              </form>
            );

}
function Input(props) {
    return(
        <input type={props.type}
        placeholder={props.text}
        name={props.name}
        className={props.className}
        value={props.value} />
    );
}
// メニュー
function MenuList(props) {
    return(
         <ul className="list">
            <li className="icon">
                <i id="user"className="fas fa-user fa-2x"></i>
            </li>
            <li className="icon">
                <i  id="shoppingCart" className="fas fa-shopping-cart fa-2x "></i>
            </li>
            <li className="icon">
                <i id="menu"className="fas fa-bars fa-2x" ></i>
            </li>
        </ul>
    );

}
// モーダル
function Modal(props) {
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
// 買い物
function ShoppingCart(props) {
    return(
    <div className="cart">
        <h2>お買い物カゴにある商品<a href="#" id="shopBack">✖️</a></h2>
        <form action="/total" method="get">
        <ul>
            <li className="shoppingList"></li>
            <li className="shoppingList"></li>
            <li className="shoppingList"></li>
            <li className="shoppingList"></li>
        </ul>
        <Input type="submit" value="お支払いへ" className="buyBtn" />
        <Input type="hidden" name="token" value={csrf_token}/>
        </form>
        <button>戻る</button>
    </div>
    );
}
// 背景
function BacKGround(props) {
    return(
        <div className={props.class}>{props.text}</div>
    );
}

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
// footer
function Footer() {
    return(
    <footer>
        <h2 id="sns">公式SNS</h2>
        <ul>
            <a href="/" className="FooterIcon"><i className="fab fa-line fa-3x myline" data-fa-transform="grow-2" data-fa-mask="fas fa-circle fa-xs" ></i></a>
            <a href="/" className="twitter FooterIcon"><i className="fab fa-twitter fa-2x"></i></a>
            <a href="/" className="facebook FooterIcon"><i className="fab fa-facebook-f fa-2x"></i></a>
            <a href="/" className="instagram FooterIcon"><i className="fab fa-instagram fa-2x"></i></a>
        </ul>
        <h2 id="help">Help & Guide</h2>
        <li><i className="fas fa-phone-alt fa-fw"></i> お問合わせ</li>
        <li><i className="fas fa-user fa-fw"></i> 新規登録 / ログイン</li>
        <li><i className="fas fa-hand-paper fa-fw"></i> ご利用方法</li>
        <li><i className="fas fa-box fa-fw"></i> 商品について</li>
        <li><i className="fas fa-truck-moving fa-fw"></i> 配送情報</li>
    </footer>
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
const domContainer = document.querySelector('.container');
ReactDOM.render(<Index />, domContainer);




