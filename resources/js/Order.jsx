import {BacKGround,ShoppingCart,Modal, SearchForm,Header,MenuList} from './components/Header.jsx';
import Footer from './components/Footer.jsx';
export function Order() {
    return(
        <section>
            <header className='ShoppingHeader'>
                <h2>Food Loss</h2>
                <MenuList data="shopping" />
            </header>
            <Confirm />
            <Modal />
            <Footer />
        </section>
    );
}


function Confirm () {
    const currentUrl = new URL(location.href);
    const queryString = currentUrl.searchParams;
    const receivedParams = {};
    queryString.forEach(function(value,name){
        receivedParams[name] = value;
    });
    console.log(receivedParams);
    return(
        <h1>{receivedParams.name}</h1>
    );
}
