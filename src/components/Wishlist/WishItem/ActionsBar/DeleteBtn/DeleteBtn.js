import React from 'react';
import './DeleteBtn.css';

class DeleteBtn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            delete: 'Удалить',
            ok: 'Понятно',
        };
    }

    render() {
        return(
            <button
                className="deleteBtn">{this.state.delete}
            </button>
        )
    }
}

export default DeleteBtn;