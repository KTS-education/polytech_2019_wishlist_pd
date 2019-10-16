import React from 'react';
import './Avatar.css';

class Avatar extends React.Component{
    render() {
        return (
            <div >
                <img src={process.env.PUBLIC_URL + '/img/avatar.png'} className="avatar" alt="Avatar"/>
            </div>
        )
    }
}

export default Avatar;
