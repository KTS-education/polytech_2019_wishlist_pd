import React from 'react';
import Avatar from "../Avatar";
import DefaultBtn from "../DefaultBtn";
import {
    ProfileDetails,
    ProfileDetailsLeft,
    ProfileDetailsRight,
    ProfileDetailsUsername,
    ProfileDetailsBtn,
} from './User-styles.js';

class User extends React.Component {
    render() {
        return (
            <>
                <ProfileDetails inSearch={this.props.inSearch}>
                    <ProfileDetailsLeft inSearch={this.props.inSearch}>
                        <Avatar src={this.props.user.img} avatarWidth={this.props.avatarWidth}/>
                    </ProfileDetailsLeft>
                    <ProfileDetailsRight inSearch={this.props.inSearch}>
                        <ProfileDetailsUsername inSearch>
                            <h3>{this.props.user.name}</h3>
                        </ProfileDetailsUsername>
                        <ProfileDetailsBtn inSearch>
                            <DefaultBtn
                                user={this.props.user}
                                inSearch={this.props.inSearch}
                                inProfile={"1.5em"}
                                text={this.props.text}
                                />
                        </ProfileDetailsBtn>
                    </ProfileDetailsRight>
                </ProfileDetails>
            </>
        )
    }
}

export default User;
