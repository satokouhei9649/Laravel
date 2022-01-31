import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Routes,
  } from 'react-router-dom';
import Example from './components/Example';
// 元のjsxファイル
import Index from './React.jsx'
  function App() {
    return (
        <div>
             {/* //ここに、pathと対応するコンポーネントを書いていく */}
            <Routes>
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
