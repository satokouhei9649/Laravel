'use strict';
// const { functionsIn } = require("lodash");
class Index extends React.Component {
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
            <SingUP />
            <Main />
        </div>
    );
  }
}

function Header() {
    return(
        <header>
            <SearchForm route="{{route('posts.login') }}" method="post" class="search topSearch searchForm searchForm1"/>
            <ListUl />
        </header>
    );
}
function SearchForm(props) {
    return(
            // <form action="" method="" className="">
            <form action={props.route} method={props.method} className={props.class}>
                <Input type="text" text="ここに入力" className="searchWord"/>
                <Input type="submit" value="検索" className="submit"/>
            </form>
    );
}
function Input(props) {
    return(
        <input type={props.type} placeholder={props.text} className={props.className} value={props.value}></input>
    );
}
function ListUl(props) {
    return(
         <ul className="list">
            <li className="icon">
                <span id="shoppingCart"><i className="fas fa-shopping-cart fa-2x "></i></span>
            </li>
            <li className="icon">
                <span id="menu"><i className="fas fa-bars fa-2x" ></i></span>
            </li>
        </ul>
    );

}
function Modal(props) {
    return(
        <section id="modal">
            <div id="close">✖️</div>
            <h3>新規登録・ログイン</h3>
            <p><a id="signupFormBtn">新規登録</a></p>
            <p><a href="#">ログイン</a></p>
            <h3>お買い物</h3>
            <p><a href=".Food">ジャンルで探す</a></p>
            <p><a>値段で探す</a></p>
        </section>
    );
}
function ShoppingCart(props) {
    return(
    <div className="cart">
        <h2>お買い物カゴにある商品<a href="#" id="shopBack">✖️</a></h2>
        <ul>
            <li className="shoppingList"></li>
            <li className="shoppingList"></li>
            <li className="shoppingList"></li>
            <li className="shoppingList"></li>
        </ul>
        <Input type="submit" value="お支払いへ" className="buyBtn" />
        <button>戻る</button>
    </div>

    );
}
function BacKGround(props) {
    return(
        <div className={props.class}>{props.text}</div>
    );
}
function SingUP(props) {
    return(
    <div className="signup">
        <a href="#" id="Back">✖️</a>
        <h2>新規登録</h2>
            <p>名前</p>
            <Input type="text" class="name"/>
            <p>メールアドレス</p>
            <Input type="text" class="email"/>
            <p>住所</p>
            <Input type="text" class="email"/>
            <p>電話番号</p>
            <Input type="text" class="email"/>
            <button className="signBtn">新規登録</button>
            <button className="loginBtn">ログイン画面</button>
    </div>
    );
}
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
function Main() {
    return(
<div>
    <BacKGround  text="topページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページですtopページです" />
    <SearchForm route="#" method="#" class="search" />
    <Ad />
    <Recommend h2="オススメ商品 ・ 売れ筋" class="recommend"/>
    <Recommend h2="セール" class="sell"/>
    <FoodMenu />
    <FoodSection />
    <Footer />
</div>
    );
}
const domContainer = document.querySelector('.container');
ReactDOM.render(<Index />, domContainer);




