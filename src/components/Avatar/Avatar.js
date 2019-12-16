import React from 'react';
import { ProfileAvatar } from './Avatar-styles.js';

class Avatar extends React.Component{
    static defaultProps = {
        src: process.env.PUBLIC_URL + '/img/avatar.png',
    };

    render() {
        return (
            <ProfileAvatar
                inHeader={this.props.inHeader}
                isHide={this.props.isHide}
                avatarWidth={this.props.avatarWidth}
                src={this.props.src}
                alt="Avatar"
            />
        )
    }
}

export default Avatar;
