import React from 'react';
import './Header.css';
import Avatar from '../../components/User/Avatar';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            leftSide: null,
            rightSide: null,
            center: null,
        };
    }

    render(){
        return(
            <div className="Header">
                <div className="left">
                    <DrawMe/>
                </div>
                <div className="right">
                    <DrawFriends/>
                </div>
            </div>
        )
    }
}

function DrawMe() {
    return (
        <div className="my-profile-block">
            <Avatar/>
            <span style={{display: "contents"}} className="name">Юля Бородкина</span>
        </div>
    )
}

function DrawFriends(){
    return (
        <div className="friends-block">
            <div className="friends-avatars">
                {/*<Avatar/>*/}
                {/*<Avatar/>*/}
                {/*<Avatar/>*/}
            </div>
            <span className="name">Мои друзья</span>
        </div>
    )
}

export default Header;

