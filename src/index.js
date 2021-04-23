import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './Components/App';
import '../src/Components/sass/index.css';
// import './Components/index.css';

reactDom.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')
);
