import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App';
import '../src/Components/sass/index.scss';
// import './Components/index.css';

reactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
