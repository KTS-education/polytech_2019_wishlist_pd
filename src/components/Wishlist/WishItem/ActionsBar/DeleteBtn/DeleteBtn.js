import React from 'react';
import styled from "styled-components";
import { Button } from "../../../../../styles/styles";

const DeleteButton = styled(Button)`
  padding: ${props => props.size || "0.8em"};
  background-image: linear-gradient(79deg, #e0fffd, #e7e1ff);
  display: inline-block;
  flex-grow: 1;

  :hover {
      background-color: #e0fffd;
      background-image: none;
  }

  :active {
      background-color: #e7e1ff;
      background-image: none;
  }
`;

class DeleteBtn extends React.Component{
    static defaultProps = {
        text: "Удалить",
    };

    render() {
        return(
            <DeleteButton onClick={() => this.props.handleMyFavorite(this.props.product.id)}>
                {this.props.text}
            </DeleteButton>
        )
    }
}

export default DeleteBtn;
