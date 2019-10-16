import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Main from "./pages/Main";
import Friends from "./pages/Friends";
import FriendPage from "./pages/FriendPage";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link exact to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/friends-list">Friends</Link>
                        </li>
                        <li>
                            <Link to="/friend">Fiend page</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/friends-list">
                        <Friends user={FRIENDS} />
                    </Route>
                    <Route path="/friend">
                        <FriendPage user={FRIENDS[0]} products={PRODUCTS} />
                    </Route>
                    <Route path="/">
                        <Main products={PRODUCTS} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

const PRODUCTS = [
    {img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
    {img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
    {img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
    {img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
    {img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
    {img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
    {img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
];

const FRIENDS = [
    {img: '/img/avatar.png', name: 'Сергей Чернобровкин'},
    {img: '/img/avatar.png', name: 'Сергей Чернобровкин'},
    {img: '/img/avatar.png', name: 'Сергей Чернобровкин'},
    {img: '/img/avatar.png', name: 'Сергей Чернобровкин'},
    {img: '/img/avatar.png', name: 'Сергей Чернобровкин'},
];