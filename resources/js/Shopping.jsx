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
                    <MenuList />
                    <SignUP/>
                    <LoginForm />
                </header>
                <ShoppingTotal />
                <Footer />
            </div>
        );
    }
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
