import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './scss/main.css';
import AppReal from './components/AppReal';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        <AppReal />
    </HashRouter>,
document.getElementById('root'));
registerServiceWorker();
