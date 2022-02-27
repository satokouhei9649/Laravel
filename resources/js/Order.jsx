import {BacKGround,ShoppingCart,Modal, SearchForm,Header,MenuList} from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {Link} from 'react-router-dom';
import {ShoppignHeader,BuyFLowState} from './Shopping';
import { useState,useEffect } from 'react';
import axios from 'axios';
export function Order() {
    return(
        <section>
            <ShoppignHeader />
            <Confirm />
            <Modal />
            <Footer />
        </section>
    );
}


function Confirm () {
    const [OrderData,setOrderData] = useState({goods: []});
    useEffect(() => {
        const li = document.querySelectorAll('.pText');

    },[Info])
    const currentUrl = new URL(location.href);
    const queryString = currentUrl.searchParams;
    const receivedParams = [];
    queryString.forEach(function(value,name){
        receivedParams.push({
            key: name,
            value: value
        }
       )
    });
    const RequestOrder = async() => {
        // let data = Object.assign({}, OrderData);
        // setOrderData(data);
        console.log(OrderData);
        //入力値を投げる
        axios.post('/api/total/order',{
            name: OrderData.name,
            prefectures: OrderData.prefectures,
            municipality: OrderData.municipality,
            address: OrderData.address,
            phoneNumber: OrderData.phoneNumber,
            method: OrderData.method,
            goods: OrderData.goods,
        })
        .then(response => {
            console.log(response.data);
            setOrderData({goods: []});
        })
        .catch(error => {
            console.log(error);
        });
    }

    // 配送情報
    const Infos = receivedParams.slice(0,6);
    const Info = Infos.map((el,index) => {
        switch(el.key) {
            case 'お名前':
                OrderData.name = el.value;
            break;
            case '都道府県':
                OrderData.prefectures = el.value;
            break;
            case '市町村':
                OrderData.municipality = el.value;
            break;
            case '住所':
                OrderData.address = el.value;
            break;
            case '電話番号':
                OrderData.phoneNumber = el.value;
            break;
            case '支払い方法':
                OrderData.method = el.value;
            break;
         }
        // const pros = el.key;
        // OrderData[pros] = el.value;
        console.log(OrderData);
        return(
          <p key={index}>{el.key}<br/>
          {el.value == '' ? <span className='message Information'>※未入力です</span>: <span className="Information">{el.value}</span>}
         </p>
        )
    })
    let total = 0;
    // 注文の情報
    const Orders =receivedParams.slice(6);
    const Order = Orders.map((el,index) => {
        OrderData.goods.push(
            el.key
        )
        console.log(OrderData);
        // 合計金額算出
        total = total + Number(el.value)
        return(
            <li  className='shoppingList orderList' key={index}>{el.key}<br/>¥{el.value}円</li>
        );
    })
    return(
        <section>
            <div className='Order-wrapper'>
                <BuyFLowState state='2' />
                <div className='ShoppingOrder'>
                    <h1>確認画面</h1>
                    <div className='OrderInfo'>
                        <h2>配送情報</h2>
                        {Info}
                    </div>
                    <div className='Orders'>
                        <h2>注文したもの</h2>
                        {Order}
                    </div>
                    {total == 0 ? '':  <h2>合計金額 ¥{total}円</h2>}
                    <button className='buyBtn' onClick={RequestOrder}>購入する</button>
                    <Link to='/' className='BackBtn'>キャンセルする</Link>
                </div>
            </div>
        </section>
    );
}
