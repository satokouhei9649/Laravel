import {BacKGround,ShoppingCart,Modal, SearchForm,Header,MenuList} from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
 export function Infomation() {
    return(
        <section>
            <header className='ShoppingHeader'>
                <h2>Food Loss</h2>
                <MenuList data="shopping" />
            </header>
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
                <input type="hidden" name={el.name} value={el.price} key={index}/>
            );
         })

    console.log(receivedParams);
    return(
        <section className='InputInfo'>
            <h1><i className="fas fa-truck-moving fa-fw"></i>配送情報入力</h1>
            <form action='/total/order' method='get'>
                <p>名前</p>
                <input type="text" name='name'/>
                <p>都道府県</p>
                <input type="text" name='prefec'/>
                <p>市町村</p>
                <input type="text" name='munici'/>
                <p>住所 ※全角で入力してください</p>
                <input type="text" name='address'/>
                <p>電話番号</p>
                <input type="text" name='phoneNumber'/>
                <p>支払い方法</p>
                <select>
                    <option>コンビニ前払い</option>
                    <option>クレジットカード</option>
                    <option>後払い</option>
                </select>
               {Input}
                <input type="submit" value='確認画面へ' />
            </form>
            <Link to="/"
            // onClick={(e) => {
            //    e.preventDefault();
            //    if(!confirm('入力が無効になりますがよろしいですか？')) {
            //     return;
            //    }
            // } }
        className='BackBtn'>戻る</Link>

        </section>
    )
}
