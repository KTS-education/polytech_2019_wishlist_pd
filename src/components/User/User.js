import React from 'react';
import './User.css';
import DefaultBtn from "../Wishlist/WishItem/ActionsBar/DefaultBtn";

class User extends React.Component {
    render() {
        // <div className="col-lg-4" style={{padding: 15 + "pt", display: "inline-flex"}}>
        //     <img
        //         className="photo"
        //         src={process.env.PUBLIC_URL + this.props.me.img}
        //         alt={this.props.me.name}/>
        //     <div className="myProfile">
        //         <span className="name">{this.props.me.name}</span>
        //         <span style={{display: "inline"}}>Хочу получить &#128524;</span>
        //         <span style={{dislay: "inline", color: "#329eff"}}>Хочу подарить &#128526;</span>
        //         <br/><br/>
        //         <DefaultBtn style={{fontSize: "12px"}}/>
        //     </div>
        // </div>
        if(this.props.type === "friendPage") {
            return(
                <div className="col-md-auto" style={{padding: "15pt", display: "inline-flex"}}>
                    <img
                        className="photo"
                        src={process.env.PUBLIC_URL + this.props.user.img}
                        alt={this.props.user.name}/>
                    <div className="searchProfile">
                        <span className="name">{this.props.user.name}</span>
                        <span style={{display: "inline"}}>Хочет получить &#128524;</span>
                        <span style={{display: "inline", color: "#329eff"}}>Хочет подарить &#128526;</span>
                        <DefaultBtn/>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="col-md-auto" style={{padding: "15pt", display: "inline-flex"}}>
                    <img
                        className="photo"
                        src={process.env.PUBLIC_URL + this.props.user.img}
                        alt={this.props.user.name}/>
                    <div className="searchProfile">
                        <span className="name">{this.props.user.name}</span>
                        <DefaultBtn/>
                    </div>
                </div>
            )
        }

    }
}

export default User;
