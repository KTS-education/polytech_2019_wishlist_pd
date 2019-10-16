import React from 'react';
import WishItem from './WishItem/WishItem.js';

class Wishlist extends React.Component{
    render() {
        const items = this.props.products;
        const wishList = items.map((product, idx) =>
            <WishItem product={product} key={idx}/>
        );
        return (
            <div>
                {wishList}
            </div>
        );
    }
}

export default Wishlist;
