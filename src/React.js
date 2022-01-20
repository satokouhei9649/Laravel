'use strict';

// const { functionsIn } = require("lodash");

class Top extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Header />
    );
  }
}
function Header() {
    return(
        <header>
            <Form />
                <ul className="list">
                    <li className="icon">
                        <span id="shoppingCart"><i className="fas fa-shopping-cart fa-2x "></i></span>
                    </li>
                    <li className="icon">
                        <span id="menu"><i className="fas fa-bars fa-2x" ></i></span>
                    </li>
                </ul>
        </header>
    );
}
function Form() {
    return(
            <form action="{{route('posts.login') }}" method="" className="search topSearch searchForm searchForm1">
                <Input type="text" text="ここに入力" className="searchWord"/>
                <Input type="submit" value="検索" className="submit"/>
            </form>
    );
}
function Input(props) {
    return(
        <input type={props.type} placeholder={props.text} className={props.className} value={props.value}></input>
    );
}

const domContainer = document.querySelector('.container');
ReactDOM.render(<Top />, domContainer);




