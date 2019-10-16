import React from 'react';
import './DefaultBtn.css';

class DefaultBtn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            add: 'Добавить в избранное'
        };
    }

    render() {
        return(
            <button
                className="defaultBtn">{this.state.add}
            </button>
        )
    }
}

export default DefaultBtn;