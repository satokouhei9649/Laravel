import { ShoppignHeader } from "./Shopping";
import { OpenModal,OpenShop } from "./Module/Module";
import { ShoppingCart ,Modal,BacKGround} from "./components/Header";
import {Link} from 'react-router-dom';
 export function Detail(props) {
    const currentUrl = new URL(location.href);
    const queryString = currentUrl.searchParams;
    const receivedParams = [];
    queryString.forEach(function(value,name){
        receivedParams[name] = value;
    });
    console.log(receivedParams);
    console.log(props.user);
    return (
        <section>
            <ShoppignHeader isLogin={props.isLogin} user={props.user} countpush={props.countpush} class="Detail"/>
            <ShoppingCart />
            <BacKGround class="background"/>
            <BacKGround class="cartbox"/>
            <BacKGround class="flashMessage" Ref ={props.Ref}/>
            <Modal isLogin={props.user.isLogin} Logout={props.Logout}/>
            <div className="DetailContainer">
            <h1>品名{receivedParams.name}</h1>
                <p>説明文</p>
                <p>{receivedParams.explain}</p>
                <p>価格</p>
                <p>{receivedParams.praice}</p>
                <button className='ToCart' name={receivedParams.name} value={receivedParams.praice} onClick={props.countpush}>カートに入れる</button>
                <Link to="/"className='BackBtn'>戻る</Link>
            </div>
        </section>
    );
}
