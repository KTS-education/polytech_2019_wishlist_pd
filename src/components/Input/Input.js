import React from 'react';
import './Input.css'

class Input extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value:''};
        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }

    keyPress(e){
        if(e.keyCode === 13){
            console.log('value', e.target.value);
        }
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render(){
        return(
            <div>
                <input className={"input"} type={"text"} onChange={this.handleChange} placeholder={"Введите название товара"} onKeyDown={this.keyPress} value={this.state.value}/>
                <p>{this.state.value}</p>
            </div>
        )
    }
}

export default Input
