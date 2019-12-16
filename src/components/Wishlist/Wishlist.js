import React from 'react';
import WishItem from './WishItem/WishItem.js';
import EmptyResponse from "../EmptyResponse";
import { WishlistContainer } from './Wishlist-styles.js'

class Wishlist extends React.Component{
    static defaultProps = {
        products: [],
    };

    constructor(props){
        super(props);
        this.state = {
            myFavorites: [],
        };
    }

    render() {
        if (this.props.products.length) {
            const items = this.props.products;
            const wishList = items.map((product) =>
                <WishItem
                    isMine={ this.props.isMine }
                    isFriend={ this.props.isFriend }
                    friendId={ this.props.friendId }

                    text={ this.props.text }
                    product={ product }

                    handleFavorite={this.props.handleFavorite}
                    refreshFavorite={ this.props.refreshFavorite }
                    refreshFriend={this.props.refreshFriend}

                    key={ product.id }
                />
            );
            return (
                <WishlistContainer>
                    {wishList}
                </WishlistContainer>
            );
            } else {
                return (
                    <EmptyResponse text={"Кажется, товаров не найдено"}/>
                );
        }
    }
}

export default Wishlist;
