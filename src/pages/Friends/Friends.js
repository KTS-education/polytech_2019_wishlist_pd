import React from 'react';
import connect from "@vkontakte/vk-connect";
import api from './../../api.js';
import Header from "../../components/Header";
import Input from './../../components/Input/Input';
import FriendsList from "../../components/FriendsList";
import { Label } from './../../styles/styles.js';
import { FriendsWrapper } from './Friends-styles.js'

class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            isLoading: false,
        };
    }

    componentDidMount = async () => {
        const vk_friends = await connect.sendPromise("VKWebAppCallAPIMethod", {
            "method": "friends.get",
            "request_id": "0",
            "params": {
                "fields": ["nickname", "photo_200"],
                "v":"5.103",
                "access_token": window.access_token,
            }
        })

        let friends = [];
        for (let friend of vk_friends.response.items) {
            friends.push(friend.id)
        }

        const data_friends = await api(`/api/user/friends`, 'POST', {
            ids: friends,
        })

        friends = [];
        for (let friend of data_friends.response.friends) {
            friends.push(
                {
                    id: friend.id,
                    img: friend.photo_100,
                    name: `${friend.first_name} ${friend.last_name}`,

                    _id: friend._id,
                }
            )
        }

        this.setState({ friends: friends });
    }

    render(){
        return(
            <>
                <Header
                    isHideRight
                    user={this.props.user}
                    linkToLeft={"/mypage"}
                    textRight={"Вернуться к поиску"}
                    linkToRight={"/"}
                />
                <FriendsWrapper>
                    <Label>
                        <span>Мои друзья</span>
                        <span className="ec ec-stuck-out-tongue-winking-eye"/>
                    </Label>
                    <Input searchPlaceholder={"Начни вводить имя друга"}/>
                    <FriendsList friends={this.state.friends}/>
                </FriendsWrapper>
            </>
        )
    }
}

export default Friends;
