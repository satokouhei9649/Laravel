import {BacKGround,ShoppingCart,Modal, SearchForm,Header,MenuList} from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {Link} from 'react-router-dom';
import {ShoppignHeader,BuyFLowState} from './Shopping';
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
    console.log(receivedParams);
    const Infos = receivedParams.slice(0,6);
    // 住所の情報
    const Info = Infos.map((el,index) => {
        return(
          <p key={index}>{el.key }<br/>
          {el.value == '' ? <span className='message Information'>※未入力です</span>: <span className="Information">{el.value}</span>}
         </p>
        )
    })
    let total = 0;
    const Orders =receivedParams.slice(6);
    // 注文の情報
    const Order = Orders.map((el,index) => {
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
                    <button className='buyBtn'>購入する</button>
                    <Link to='/' className='BackBtn'>キャンセルする</Link>
                </div>
            </div>
        </section>
    );
}
