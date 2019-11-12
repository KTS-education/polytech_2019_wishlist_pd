import React, {Fragment} from 'react';
import styled from "styled-components";
import Avatar from "../User/Avatar";
import { ColoredLink } from './../../styles/styles.js';

const NavHeader = styled.div`
  padding: 23.5pt 20pt 10pt;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
`;
const NavLeft = styled.div`
  width: 33%;
  text-align: left;
`;
const NavRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 33%;
  text-align: right;
`;
const NavCenter = styled.div`
  display: ${props => props.isFriendPage ? "flex" : "none"}
  width: 33%;
  justify-content: center;
`;
const HeaderLink = styled(ColoredLink)`
  padding: ${props => props.isMyPage ? "0pt" : "12pt"};
`;
const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

class Header extends React.Component {
    render(){
        return (
            <Fragment>
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
            </Fragment>
        );
    }
}

export default Header;
