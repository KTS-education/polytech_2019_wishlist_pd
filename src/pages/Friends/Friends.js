import React, {Fragment} from 'react';
import styled from "styled-components";
import Header from "../../components/Header";
import Input from './../../components/Input/Input';
import FriendsList from "../../components/FriendsList";
import { Label } from './../../styles/styles.js';

const FriendsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Friends extends React.Component {
    render(){
        return(
            <Fragment>
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
                        <span className="ec ec-stuck-out-tongue-winking-eye"></span>
                    </Label>
                    <Input searchPlaceholder={"Начни вводить имя друга"}/>
                    <FriendsList friends={this.props.friends}/>
                </FriendsWrapper>
            </Fragment>
        )
    }
}

export default Friends;
