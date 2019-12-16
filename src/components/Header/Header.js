import React from 'react';
import Avatar from "../Avatar";
import {
    NavHeader,
    NavLeft,
    NavRight,
    NavCenter,
    HeaderLink,
    AvatarContainer,
} from './Header-styles';

class Header extends React.Component {
    render(){
        return (
            <>
                <NavHeader>
                    <NavLeft>
                        <Avatar src={this.props.user.img} isHide={this.props.isHideLeft} avatarWidth="40px"/>
                        <HeaderLink to={this.props.linkToLeft}>
                            {this.props.textLeft || this.props.user.name}
                        </HeaderLink>
                    </NavLeft>
                    <NavCenter isFriendPage={this.props.isFriendPage}>
                        <HeaderLink to={"/"}>
                            {"Вернуться к поиску"}
                        </HeaderLink>
                    </NavCenter>
                    <NavRight>
                        <HeaderLink to={this.props.linkToRight}>
                            {this.props.textRight || this.props.user.name}
                        </HeaderLink>
                        <AvatarContainer>
                            <Avatar inHeader isHide={this.props.isHideRight} avatarWidth="40px"/>
                            <Avatar inHeader isHide={this.props.isHideRight} avatarWidth="40px"/>
                            <Avatar isHide={this.props.isHideRight} avatarWidth="40px"/>
                        </AvatarContainer>
                    </NavRight>
                </NavHeader>
            </>
        );
    }
}

export default Header;
