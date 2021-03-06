import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Routes,} from 'react-router-dom';
import Index from './React.jsx';
import {Shopping} from './Shopping.jsx';
import {Infomation} from './Info'
import {Register} from './Register'
import {Order} from './Order'
import { Detail } from './Detail.jsx';
import axios from 'axios';
import {AnimationClose} from './Module/Module';
  class App extends  React.Component {
    constructor(props) {
        super(props);
        // ログイン情報
        this.state = {
            userName: '',
            userEmail: '',
            userPassword: '',
            isLogin: false,
            // 買い物カゴの個数
            count: 0,
        }
        // アニメーションのdom操作
        this.flashMessageRef = React.createRef();
        this.isLogin = this.isLogin.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.Logout = this.Logout.bind(this);
        this.PushCart = this.PushCart.bind(this);
        this.RemoveCart = this.RemoveCart.bind(this);
    }
    componentDidUpdate(){
       const flashMessage = this.flashMessageRef.current
        flashMessage.classList.add('active');
         // アニメーションが終わった後に処理
        flashMessage.addEventListener('animationend',() => {
            flashMessage.classList.remove('active');
            flashMessage.classList.add('hidden');
        })
    }
    isLogin() {
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

    PushCart = (e) => {
        const flashMessage = document.querySelector('.flashMessage');
        flashMessage.classList.remove('hidden');
        // リスト
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
        DeleteBtn.onclick = this.RemoveCart;

        this.setState(prevState =>{
            return{
                count: prevState.count + 1
            }
        })
    }
    RemoveCart=(e) => {
        this.setState(prevState => {
            return{
                count: prevState.count - 1
            }

        })
        const TargetLi = e.target.parentNode;
        TargetLi.remove();
    }

    render(){
        return (
            <div>
                <Routes>
                    {/* <Route path='/example' element={<Example />} /> */}
                    <Route path='/' element={
                        <Index
                        isLogin={this.state.isLogin}
                        Logout={this.Logout}
                        Login={this.isLogin}
                        user={this.state}
                        inputChange={this.inputChange}
                        count={this.state.count}
                        countpush={this.PushCart}
                        Ref={this.flashMessageRef}
                        />} />
                        <Route path='/detail' element={
                        <Detail
                        user={this.state}
                        countpush={this.PushCart}
                        Ref={this.flashMessageRef}
                        Logout={this.Logout}
                        />} />
                    <Route path='/register' element={
                    <Register
                    isLogin={this.state.isLogin}
                    Logout={this.Logout}
                    Login={this.isLogin}
                    user={this.state}
                    inputChange={this.inputChange}
                    count={this.state.count}
                    countpush={this.PushCart}
                    Ref={this.flashMessageRef}
                    />} />
                    <Route path='/total' element={
                    <Shopping
                     isLogin={this.state.isLogin}
                     Logout={this.Logout}
                     Login={this.isLogin}
                     user={this.state}
                     inputChange={this.inputChange}
                     count={this.state.count}
                    />} />
                    <Route path='/total/info' element={
                    <Infomation
                    isLogin={this.state.isLogin}
                    Logout={this.Logout}
                    Login={this.isLogin}
                    user={this.state}
                    inputChange={this.inputChange}
                    count={this.state.count}
                    />} />
                    <Route path='/total/order' element={
                    <Order
                    isLogin={this.state.isLogin}
                    Logout={this.Logout}
                    Login={this.isLogin}
                    user={this.state}
                    inputChange={this.inputChange}
                    count={this.state.count}
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
