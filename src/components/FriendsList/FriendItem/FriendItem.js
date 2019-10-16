import React from 'react';
import DefaultBtn from './../../Wishlist/WishItem/ActionsBar/DefaultBtn/DefaultBtn.js';
import './FriendItem.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import User from "../../User";

// const photo = {
//     width:"100px",
//     height: "100px",
//     borderRadius: "50%",
//     boxShadow: "0 3px 9px 0 rgba(0, 0, 0, 0.15)",
//     verticalAlign: "middle",
// };
//
// const searchProfile = {
//     display: "inline-block",
//     // position: "relative",
// };

// <div className="col-md-auto" style={{padding: 15 + "pt", display: "inline-flex"}}>
//     <img
//         className="photo"
//         src={process.env.PUBLIC_URL + this.props.friend.img}
//         alt={this.props.user.name}/>
//     <div className="searchProfile">
//         <span className="name">{this.props.user.name}</span>
//         <DefaultBtn/>
//     </div>
// </div>

class FriendItem extends React.Component {
    render(){
        return(
            <div className="row justify-content-center">
                <User user={this.props.user}/>
            </div>
        )
    }
}

export default FriendItem;
