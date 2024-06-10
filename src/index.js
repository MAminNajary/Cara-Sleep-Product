import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import Reducer from './components/Shared/Reducer';

const Store = createStore(Reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={Store}>
                <App />
        </Provider>
    </BrowserRouter>,
);
