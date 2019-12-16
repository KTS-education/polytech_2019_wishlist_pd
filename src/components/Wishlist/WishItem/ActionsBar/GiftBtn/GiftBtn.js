import React from 'react';
import { GiftButton } from './GiftBtn-styles.js';

class GiftBtn extends React.Component{
    render() {
        return(
            <GiftButton>
                <img
                    src={process.env.PUBLIC_URL + '/img/giftbox.png'}
                    alt="gift"
                    />
            </GiftButton>
        )
    }
}

export default GiftBtn;
