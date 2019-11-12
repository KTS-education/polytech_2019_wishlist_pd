import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';
import connect from "@vkontakte/vk-connect";

const WISHLIST_ID = 6868134;
const APP_ID = 7159872;

let FRIENDS = [];
// const AUTH_PARAMS = '?vk_access_token_settings=&vk_app_id=6868134&vk_are_notifications_enabled=0&vk_is_app_user=0&vk_is_favorite=0&vk_language=ru&vk_platform=desktop_web&vk_ref=other&vk_user_id=199026622&sign=C_R2Gsf-lpF-yjdZ4F1L7xgpWWB0QcKRjUfmc7n-Yis';
const AUTH_PARAMS = '?vk_access_token_settings=&vk_app_id=6868134&vk_are_notifications_enabled=0&vk_is_app_user=0&vk_is_favorite=0&vk_language=ru&vk_platform=desktop_web&vk_ref=other&vk_user_id=222581166&sign=mMPXcVzOrvKEyhf_xTaoNyHllfBn_tjzR0WqOm-0vbw';
//7159872   7177327
connect.send("VKWebAppInit", {});

fetch('/api/user/auth' + AUTH_PARAMS, {method: 'POST'})
    .then(result => result.json())
    .then(result => {
        console.log(result);
        window.token = result.data.token;
        return connect.sendPromise("VKWebAppGetAuthToken", {"app_id": APP_ID, "scope": "friends"});
    })
    .then(data => {
    return connect.sendPromise("VKWebAppCallAPIMethod", {
        "method": "friends.get",
        "request_id": "0",
        "params": {
            "fields": ["nickname", "photo_200"],
            "v":"5.103",
            "access_token": data.access_token
        }
    }).then(data_friends => {
        for (let friend of data_friends.response.items) {
            FRIENDS.push(
                {
                    id: friend.id,
                    img: friend.photo_200,
                    name: `${friend.first_name} ${friend.last_name}`
                }
            )
        }
        return connect.sendPromise('VKWebAppGetUserInfo');
    }).then(data_user => {
        const ME = {
            id: data_user.id,
            img: data_user.photo_200,
            name: `${data_user.first_name} ${data_user.last_name}`
        };

        const PRODUCTS = [
            {id: 0, img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
            {id: 1, img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
            {id: 2, img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
            {id: 3, img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
            {id: 4, img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
            {id: 5, img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
            {id: 6, img: '/img/iphone.png', title: 'iPhone XR 256GB', price: '70 000 ₽', description: 'Мобильный телефон Apple iPhone XR 256GB (желтый)'},
        ];

        ReactDOM.render(
            <App
                me={ME}
                products={PRODUCTS}
                friends={FRIENDS}
            />,
            document.getElementById('root')
        );
    });
}).catch(err => {
    debugger;
});
