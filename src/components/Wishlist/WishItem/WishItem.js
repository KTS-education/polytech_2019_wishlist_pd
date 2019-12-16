import React from 'react';
import ActionsBar from "./ActionsBar/ActionsBar";
import {
    WishItemContainer,
    SpanContainer,
    ProductImg,
    NameSpan,
    PriceSpan,
    Description,
} from './WishItem-styles.js';

class WishItem extends React.Component{
    render() {
        return(
            <WishItemContainer>
                <ProductImg
                    src={process.env.PUBLIC_URL + this.props.product.img}
                    alt={this.props.product.name}
                />
                <SpanContainer>
                    <NameSpan>{this.props.product.title}</NameSpan>
                    <PriceSpan>{this.props.product.price}</PriceSpan>
                    <Description>{this.props.product.description}</Description>
                    <ActionsBar
                        isMine={this.props.isMine}
                        isFriend={this.props.isFriend}
                        friendId={this.props.friendId}

                        text={this.props.text}
                        product={this.props.product}

                        handleFavorite={this.props.handleFavorite}
                        refreshFavorite={this.props.refreshFavorite}
                        refreshFriend={this.props.refreshFriend}
                    />
                </SpanContainer>
            </WishItemContainer>
        )
    }
}

export { WishItem as default };
