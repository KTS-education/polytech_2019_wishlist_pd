import React from 'react';
import styled from "styled-components";
import { Button } from "../../../../../styles/styles";
import { Link } from "react-router-dom";

const DefaultButton = styled(Button)`
  padding: ${props => props.inSearch ? "0.5rem" : "0.8rem"} ${props => props.inProfile};
  background-image: linear-gradient(73deg, #7dc4ff, #6700ff);
  color: white;
  flex-grow: 1;

  :hover {
      background-image: linear-gradient(259deg, #7dc4ff, #7dc4ff);
  }

  :active {
      background-color: #6700ff;
      background-image: none;
  }
`;

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
                    onClick={() => this.props.handleMyFavorite(this.props.product.id)}
                    >
                        {this.props.text}
                    </DefaultButton>
        } else {
            btn = <Link to={`/friend/${this.props.user.id}`}>
                        <DefaultButton inSearch={this.props.inSearch}>
                            {"Узнать что подарить"}
                        </DefaultButton>
                    </Link>
                }
        return(
            btn
        )
    }
}

export default DefaultBtn;
