import { ShoppignHeader } from "./Shopping";


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
            <ShoppignHeader isLogin={props.isLogin} user={props.user} countpush={props.countpush}/>
            <div className="DetailContainer">
            <h1>品名{receivedParams.name}</h1>
                <p>説明文</p>
                <p>{receivedParams.explain}</p>
                <p>価格</p>
                <p>{receivedParams.praice}</p>
                <p>登録日 <span>{receivedParams.data}</span></p>
            </div>
        </section>
    );
}
