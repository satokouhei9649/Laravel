import { ShoppignHeader } from "./Shopping";
import { OpenModal,OpenShop } from "./Module/Module";
import { ShoppingCart ,Modal,BacKGround} from "./components/Header";
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
            <div>
                <p className="LinkTop"><a href="/">&gt;&gt;Topへ</a></p>
            </div>
            <div className="DetailContainer">
                <p>品名</p>
            <h1>{receivedParams.name}</h1>
                <p className="Explain">説明文</p>
                <p>{receivedParams.explain}</p>
                <p className="Price">価格</p>
                <p>{receivedParams.praice}</p>
                <button className='ToCart' name={receivedParams.name} value={receivedParams.praice} onClick={props.countpush}>カートに入れる</button>
            </div>
        </section>
    );
}
