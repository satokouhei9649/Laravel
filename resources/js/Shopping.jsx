import {BacKGround,ShoppingCart,Modal, SearchForm,Header,Input} from './components/Header.jsx';
import {SignUP, LoginForm} from './components/Signup_Login.jsx';
import Footer from './components/Footer.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

export function Shopping () {
    return(
        <div>
            <Header />
            <SignUP/>
            <LoginForm />
            <ShoppingTotal />
            <Footer />
        </div>
    );
}
function ShoppingTotal() {
    return(
        <div>
            <h2>成功</h2>
            <h2>成功</h2>
            <h2>成功</h2>
            <h2>成功</h2>
            <h2>成功</h2>
            <h2>成功</h2>
            <h2>成功</h2>
        </div>
    );
}
