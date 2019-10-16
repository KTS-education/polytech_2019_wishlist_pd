import React from 'react';
import Header from "../../components/Header";
import Wishlist from "./../../components/Wishlist/Wishlist.js";
import User from "../../components/User";
import './FriendPage.css'

class FriendPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            friendsWish: [],
            myGifts: [],
            isMyGifts: true,
        }
    }

    render(){
        return(
            <div>
                <Header />
                <User type={"friendPage"} user={this.props.user}/>
                <Wishlist products={this.props.products}/>
            </div>
        )
    }
}

export default FriendPage;
