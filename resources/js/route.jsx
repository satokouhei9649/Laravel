import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Routes,
  } from 'react-router-dom';
import Example from './components/Example';
import Index from './React.jsx';
import {Shopping} from './Shopping.jsx';
  function App() {
    return (
        <div>
            <Routes>
                <Route path='/example' element={<Example />} />
                <Route path='/' element={<Index />} />
                <Route path='/total' element={<Shopping />} />
            </Routes>
        </div>
    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))
