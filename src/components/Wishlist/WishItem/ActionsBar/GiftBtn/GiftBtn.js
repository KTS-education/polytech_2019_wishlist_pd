import React from 'react';
import './GiftBtn.css';


class GiftBtn extends React.Component{
    render() {
        return(
            <button className="giftBtn">
                <img src={process.env.PUBLIC_URL + '/img/giftbox.png'} alt="gift"/>
            </button>
        )
    }
}

export default GiftBtn;