import {BacKGround,ShoppingCart,Modal, SearchForm,Header,MenuList} from './components/Header.jsx';
import {SignUP, LoginForm} from './components/Signup_Login.jsx';
import Footer from './components/Footer.jsx';
import React from 'react';
export class Shopping extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <header className='ShoppingHeader'>
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
    //URLSearchParamsオブジェクトを取得
    const queryString = currentUrl.searchParams;
    const receivedParams = [];
    queryString.forEach(function(value,name){
    receivedParams.push({
       name: name,
       price: value
    })
    });
    const Total = receivedParams.map((el,index) => {
        return(
            <li key={index}>{el.name}  ¥{el.price}</li>
        );
    })
    console.log(receivedParams);
    return(
        <div>
            {Total}
        </div>
    );
}
