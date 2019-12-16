import React from 'react';
import { DeleteButton } from './DeleteBtn-styles.js';

class DeleteBtn extends React.Component{
    static defaultProps = {
        text: "Удалить",
    };

    render() {
        return(
            <DeleteButton onClick={this.props.onClick} >
                {this.props.text}
            </DeleteButton>
        )
    }
}

export default DeleteBtn;
