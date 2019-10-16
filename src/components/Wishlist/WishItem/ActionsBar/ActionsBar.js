import React from 'react';
import DefaultBtn from "./DefaultBtn";
import DeleteBtn from "./DeleteBtn";
import GiftBtn from "./GiftBtn";
import './ActionsBar.css'

class ActionsBar extends React.Component{
    render() {
        return(
            <div style={{display: "inline-flex"}} className="actionBar">
                {/*<DefaultBtn/>*/}
                <DeleteBtn/><GiftBtn/>
            </div>
        )
    }
}

export default ActionsBar;
