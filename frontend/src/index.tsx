import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import './index.css';
import './components/modals/modals.css'

import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={createStore(reducers, compose(applyMiddleware(thunk)))}>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>
);