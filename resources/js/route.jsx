import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Routes,
  } from 'react-router-dom';
import Example from './components/Example';

  function App() {
    return (
        <div>
            <Routes>
             //ここに、pathと対応するコンポーネントを書いていく
                <Route path='/example' exact component={Example} />
            </Routes>
        </div>
    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))
