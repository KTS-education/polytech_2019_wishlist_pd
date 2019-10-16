import React from 'react';
import FriendItem from './FriendItem/FriendItem.js';


class FriendsList extends React.Component {
    render(){
        const friends = this.props.user;
        const friendsList = friends.map((friend, idx) =>
            <FriendItem user={friend} key={idx}/>
        );
        return (
            <div>
                {friendsList}
            </div>
        );
    }
}

export default FriendsList;
