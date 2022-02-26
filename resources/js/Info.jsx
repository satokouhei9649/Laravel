import {BacKGround,ShoppingCart,Modal, SearchForm,Header,MenuList} from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {Link} from 'react-router-dom';
import {ShoppignHeader,BuyFLowState} from './Shopping';

 export function Infomation() {
    return(
        <section>
            <ShoppignHeader />
            <Modal />
            <Info />
            <Footer />
        </section>
    );
}
function Info () {
    const currentUrl = new URL(location.href);
    const queryString = currentUrl.searchParams;
    const receivedParams = [];
        queryString.forEach(function(value,name){
        receivedParams.push({
                 name: name,
                 price: value
             }
            )
         });
         const Input = receivedParams.map((el,index) => {
             return(
                <input type="hidden" name={el.name}  value={el.price} key={index}/>
            );
         })

    console.log(receivedParams);
    const Total = receivedParams;
    return(
        <section className='InputInfo'>
            <BuyFLowState state='1'/>
            <div className='ShoppingOrder'>
                <h1><i className="fas fa-truck-moving fa-fw"></i>配送情報入力</h1>
                <form action='/total/order' method='get' className='InfoForm'>
                    <p>お名前</p>
                    <input type="text" name='お名前'/>
                    <h2>住所入力</h2>
                    <p>都道府県</p>
                    <input type="text" name='都道府県'/>
                    <p>市町村</p>
                    <input type="text" name='市町村'/>
                    <p>住所 ※全角で入力してください</p>
                    <input type="text" name='住所'/>
                    <p>電話番号</p>
                    <input type="text" name='電話番号'/>
                    <p>支払い方法</p>
                    <select name='支払い方法'>
                        <option value="コンビニ前払い">コンビニ前払い</option>
                        <option value="クレジットカード">クレジットカード</option>
                        <option  value="後払い">後払い</option>
                    </select>
                        {Input}
                    <input type="submit" value='確認画面へ' className='ToOrderBtn'/>
                    </form>
                <Link to="/"
                // onClick={(e) => {
                //    e.preventDefault();
                //    if(!confirm('入力が無効になりますがよろしいですか？')) {
                //     return;
                //    }
                // } }
                className='BackBtn'>戻る</Link>
            </div>
        </section>
    );
}
