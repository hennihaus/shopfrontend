import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {Provider} from 'react-redux';
import articleReducer from "./store/article-reducer";
import categoryReducer from "./store/category-reducer";
import shoppingCartReducer from "./store/shopping-cart-reducer";
import authReducer from "./store/auth-reducer";
import orderReducer from "./store/order-reducer";
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";

const rootReducer = combineReducers({
    articleReducer,
    categoryReducer,
    shoppingCartReducer,
    authReducer,
    orderReducer
});
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
