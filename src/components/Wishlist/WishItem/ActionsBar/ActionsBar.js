import React from 'react';
import DefaultBtn from "../../../DefaultBtn";
import DeleteBtn from "../../../DeleteBtn";
import GiftBtn from "./GiftBtn";
import api from "../../../../api";
import { ActionBar } from './ActionsBar-styles.js';

class ActionsBar extends React.Component {

    addFavorite = async () => {
        await api(
            `/api/wishlist/add?uid=${window.user_id}`,
            'POST', {
            id: this.props.product.id,
            price: this.props.product.price,
            name: this.props.product.title,
            photo: this.props.product.img,
        });

        this.props.handleFavorite(this.props.product.id)
    };

    deleteFavorite = async () => {
        await api(
            `/api/wishlist/delete`,
            'POST',
            { id: this.props.product.id }
        );

        if (!this.props.isMine){
            this.props.handleFavorite(this.props.product.id)
        }

        if (this.props.isMine || !this.props.isFriend){
            this.props.refreshFavorite(this.props.product.id, this.props.product.booked_by);
        }
    };

    bookGift = async () => {
        await api(
            `/api/wishlist/book`,
            'POST',
            { id: this.props.product.id,
              user_id: this.props.friendId,
            }
        );

        this.props.refreshFriend(this.props.product.id, this.props.product.booked_by);
    };

    unbookGift = async () => {
        await api(
            `/api/wishlist/unbook`,
            'POST',
            { id: this.props.product.id,
              user_id: this.props.friendId,
            }
        );

        if (this.props.isFriend){
            this.props.refreshFriend(this.props.product.id, this.props.product.booked_by);
        }
    };

    render() {
        let favBtn;
        const isFavorite = this.props.product.isFavorite;

        if (isFavorite || this.props.isMine) {
            favBtn = <DeleteBtn
                isMine={this.props.isMine}
                text={this.props.text}
                product={this.props.product}
                onClick={this.deleteFavorite}
            />
        } else if (this.props.product.booked_by === window.user_id) {
            favBtn = <DeleteBtn
                isFriend={this.props.isFriend}
                friendId={this.props.friendId}
                product={this.props.product}
                onClick={this.unbookGift}
            />
        } else if (this.props.isFriend && this.props.product.booked_by !== false) {
            favBtn = <>
                <DeleteBtn
                    isFriend={this.props.isFriend}
                    friendId={this.props.friendId}
                    product={this.props.product}
                    onClick={this.unbookGift}
                />
                <GiftBtn />
            </>
        } else if (this.props.isFriend) {
            favBtn = <DefaultBtn
                isFriend={this.props.isFriend}
                friendId={this.props.friendId}
                text={this.props.text}
                product={this.props.product}
                onClick={this.bookGift}
            />
        } else {
            favBtn = <DefaultBtn
                isMine={this.props.isMine}
                text={this.props.text}
                product={this.props.product}
                onClick={this.addFavorite}
            />
        }
        return (
            <ActionBar
                handleFavorite={this.props.handleFavorite}

                refreshFavorite={this.props.refreshFavorite}

                refreshFriend={this.props.refreshFriend}
                >
                {favBtn}
            </ActionBar>
        )
    }
}

export default ActionsBar;
