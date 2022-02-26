import {BacKGround,ShoppingCart,Modal, SearchForm,Header,MenuList} from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {SignUP, LoginForm} from './components/Signup_Login.jsx';
import {Remove} from './React.jsx';
import React from 'react';
import {Link} from 'react-router-dom';
export class Shopping extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <header className='ShoppingHeader'>
                    <h2>Food Loss</h2>
                    <MenuList data="shopping" />
                </header>
                    <Modal />
                    <SignUP/>
                    <LoginForm />
                <ShoppingTotal />
                <Footer />
            </div>
        );
    }
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
            <button className='DeleteBtn' onClick={Remove}>[X]</button></li>
        );
    })
    console.log(receivedParams);
    return(
        <div className='ShoppingOrder'>
            {Total.length >= 2 ? '': <p className='message'>何も入っていません</p>}
            <form action='/total/info' method='get' className='ShoppingForm'>
            {Total}
            {total == 0 ? '':  <h2>合計金額 ¥{total}円<input type="hidden" name='price' value={total}/></h2>}
            <input type="submit" value="住所記入へ" />
            </form>
            <Link to="/"className='BackBtn'>戻る</Link>
        </div>
    );
}
