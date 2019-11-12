import React from 'react';
import styled from "styled-components";
import WishItem from './WishItem/WishItem.js';
import EmptyResponse from "../EmptyResponse";

const WishlistContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

class Wishlist extends React.Component{
    render() {
        if (this.props.products.length) {
            const items = this.props.products;
            const wishList = items.map((product) =>
                <WishItem
                    isMine={this.props.isMine}
                    text={this.props.text}
                    product={product}
                    key={product.id}
                    handleMyFavorite={this.props.handleMyFavorite}
                />
            );
            return (
                <WishlistContainer>
                    {wishList}
                </WishlistContainer>
            );
        }else{
            return (
                <EmptyResponse text={"Кажется, товаров не найдено"}/>
            );
        }
    }
}

export default Wishlist;
