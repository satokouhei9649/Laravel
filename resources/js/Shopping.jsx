import {BacKGround,ShoppingCart,Modal, SearchForm,Header,MenuList} from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {SignUP, LoginForm} from './components/Signup_Login.jsx';
import {Remove} from './React.jsx';
import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
export function Shopping(props){
        return(
            <div>
                <ShoppignHeader isLogin={props.isLogin}/>
                <Modal isLogin={props.isLogin} Logout={props.Logout}/>
                {props.isLogin == false ? <SignUP/> : ''}
                {props.isLogin == false ? <LoginForm user={props.user} Login={props.Login} inputChange={props.inputChange} />: ''}
                <ShoppingTotal />
                <Footer />
            </div>
        );
}
 export function ShoppignHeader(props) {
    return(
                <header className='ShoppingHeader'>
                    <h2 className='title'>Food Loss</h2>
                    <MenuList data="shopping"  isLogin={props.isLogin}/>
                </header>
        );
}
function ShoppingTotal() {
    const currentUrl = new URL(location.href);
    const queryString = currentUrl.searchParams;
    const receivedParams = [];
    queryString.forEach(function(value,name){
        receivedParams.push({
            name: name,
            price: value
        })
    });
    // 送料
    const postage = 800;
    // 合計額
    let total = 0;
    const Total = receivedParams.map((el,index) => {
        if (el.name == 'token') {
            return;
        }
        // 合計金額算出
        total = total + Number(el.price);
        return(
            <li className="shoppingList total"key={index}>{el.name} <br/> ¥ {el.price}
            <input type='hidden' name={el.name} value={el.price}/>
            <button className='DeleteBtn Delete_Shop' onClick={Remove}>[X]</button></li>
        );
    })
    console.log(receivedParams);
    return(
        <section>
            <BuyFLowState state='0'/>
        <div className='ShoppingOrder'>
            <h1>購入商品確認</h1>
            {Total.length >= 2 ? '': <p className='message'>何も入っていません</p>}
            <form action='/total/info' method='get' className='ShoppingForm'>
            {/* カゴの中の一覧表示 */}
            {Total}
            <h2>商品金額 ¥{total}  配送料  ￥800円</h2>
            {total == 0 ? '': <h2>合計金額 ¥{total + postage}円</h2>}
            {Total.length >= 2 ? <input type="submit" value="住所記入へ"  className='Submit_To_Info'/> : ''}
            </form>
            <Link to="/"className='BackBtn'>戻る</Link>
        </div>
        </section>
    );
}
 export function BuyFLowState (props) {
     useEffect(() => {
         const li = document.querySelectorAll('.Flow');
         switch(props.state) {
            case '0':
                li[0].classList.add('active');
            break;
            case '1':
                li[1].classList.add('active');
            break;
            case '2':
                li[2].classList.add('active');
            break;
         }
     },[])
    return(
        <ul className='BuyState'>
            <li className='Flow'>❶ 商品確認</li>
            <li className='Flow'>❷ 支払い・配送情報入力</li>
            <li className='Flow'>❸ 購入確認</li>
        </ul>
    );

}
