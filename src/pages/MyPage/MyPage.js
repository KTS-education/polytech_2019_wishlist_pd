import React from 'react';
import Header from "../../components/Header";
import Wishlist from "../../components/Wishlist";
import User from "../../components/User";

class MyPage extends React.Component{
    render(){
        return(
            <div>
                <Header
                    isHideLeft
                    user={this.props.user}
                    textLeft={"Вернуться к поиску"}
                    textRight={"Мои друзья"}
                    linkToLeft={"/"}
                    linkToRight={"/friendslist"}
                />
                <User
                    wantText={"Хочу"}
                    text={"Поделиться"}
                    avatarWidth="150px"
                    user={this.props.user}
                />
                <Wishlist
                    isMine
                    products={this.props.products}
                    handleMyFavorite={this.props.handleMyFavorite}
                />
            </div>
        )
    }
}

export default MyPage;
