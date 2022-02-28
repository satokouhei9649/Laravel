import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Routes,
  } from 'react-router-dom';
import Example from './components/Example';
import Index from './React.jsx';
import {Shopping} from './Shopping.jsx';
import {Infomation} from './Info'
import {Order} from './Order'
import axios from 'axios';
import {AnimationClose} from './components/Header.jsx';
  class App extends  React.Component {
    constructor(props) {
        super(props);
        // ログイン情報
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
    render(){
        return (
            <div>
                <Routes>
                    <Route path='/example' element={<Example />} />
                    <Route path='/' element={
                    <Index
                    isLogin={this.state.isLogin}
                    Logout={this.Logout}
                    Login={this.isLogin}
                    user={this.state}
                    inputChange={this.inputChange}
                    />} />
                    <Route path='/total' element={
                    <Shopping
                     isLogin={this.state.isLogin}
                     Logout={this.Logout}
                     Login={this.isLogin}
                     user={this.state}
                     inputChange={this.inputChange}
                    />} />
                    <Route path='/total/info' element={
                    <Infomation
                    isLogin={this.state.isLogin}
                    Logout={this.Logout}
                    Login={this.isLogin}
                    user={this.state}
                    inputChange={this.inputChange}
                    />} />
                    <Route path='/total/order' element={
                    <Order
                    isLogin={this.state.isLogin}
                    Logout={this.Logout}
                    Login={this.isLogin}
                    user={this.state}
                    inputChange={this.inputChange}
                    />} />
                </Routes>
            </div>
        );
    }
}
  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))
