import React from 'react';
import './MyPage.css'
import Header from "../../components/Header";
import Wishlist from "./../../components/Wishlist/Wishlist.js";
import User from "../../components/User";

class MyPage extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <User user={this.props.user}/>
                <Wishlist products={this.props.products}/>
            </div>
        )
    }
}

export default MyPage;