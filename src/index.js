import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './pages/Main';
import Friends from './pages/Friends';
import * as serviceWorker from './serviceWorker';
import MyPage from "./pages/MyPage";
import FriendPage from "./pages/FriendPage";
import App from "./App";





const ME = {img: '/img/avatar.png', name: 'Антон Чащин'};

// ReactDOM.render(<Main products={PRODUCTS} />, document.getElementById('root'));
// ReactDOM.render(<Friends user={FRIENDS}/>, document.getElementById('root'));
// ReactDOM.render(<FriendPage user={FRIENDS[0]} products={PRODUCTS}/>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
