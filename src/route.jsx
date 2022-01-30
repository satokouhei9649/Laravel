import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Routes,
  } from 'react-router-dom';
import Example from '../resources/js/components/Example';
import Index from '../public/js/React.js';
  function App() {
    return (
        <div>
            <Routes>
             //ここに、pathと対応するコンポーネントを書いていく
                {/* <Route path='/' exact component={Example} /> */}
                <Route path='/example' element={<Example />} />
                <Route path='/' element={<Index />} />
            </Routes>
        </div>
    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))
