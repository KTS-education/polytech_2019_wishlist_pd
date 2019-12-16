import React from 'react';
import { Link } from "react-router-dom";
import { DefaultButton } from './DefaultBtn-styles.js';

class DefaultBtn extends React.Component{
    static defaultProps = {
        text: "Добавить в избранное",
    };

    render() {
        let btn;
        if (!this.props.inSearch) {
            btn = <DefaultButton
                inProfile={this.props.inProfile}
                inSearch={this.props.inSearch}
                onClick={this.props.onClick}
            >
                {this.props.text}
            </DefaultButton>
        } else {
            btn = <Link to={{
                    pathname: `/friend/${this.props.user.id}`,
                    friend: this.props.user
                }}>
                        <DefaultButton inSearch={this.props.inSearch} >
                            {"Узнать что подарить"}
                        </DefaultButton>
                    </Link>
                }
        return btn
    }
}

export default DefaultBtn;
