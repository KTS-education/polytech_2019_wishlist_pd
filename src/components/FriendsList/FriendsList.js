import React from 'react';
import EmptyResponse from "../EmptyResponse";
import {
    ContentContainer,
    FriendsContainer
} from './FriendsList-styles';
import User from './../User/';

class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowDisplayed: 0
        };
    }

    render(){
        if (this.props.friends.length) {
            const friends = this.props.friends;
            const friendsList = friends.map((friend) =>
                <User inSearch user={friend} key={friend.id}/>
            );
            return (
                <ContentContainer>
                    <FriendsContainer>
                        {friendsList}
                    </FriendsContainer>
                </ContentContainer>
            );
        } else {
            return (
                <EmptyResponse text={"Кажется, у тебя нет друзей"}/>
            );
        }
    }
}

export default FriendsList;
