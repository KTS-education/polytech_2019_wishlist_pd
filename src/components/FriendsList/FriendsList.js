import React from 'react';
import styled from "styled-components";
import EmptyResponse from "../EmptyResponse";
import User from './../User/';
import DeleteBtn from "../Wishlist/WishItem/ActionsBar/DeleteBtn";

const ContentContainer = styled.div`
    align-self: center;
`;

const FriendsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

class FriendsList extends React.Component {
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
                    <DeleteBtn text={"Показать ещё"}/>
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
