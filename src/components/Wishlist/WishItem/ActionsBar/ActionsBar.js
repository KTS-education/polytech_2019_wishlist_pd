import React from 'react';
import styled from "styled-components";
import DefaultBtn from "./DefaultBtn";
import DeleteBtn from "./DeleteBtn";
import GiftBtn from "./GiftBtn";

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.5em;
`;

class ActionsBar extends React.Component{
    render() {
        let favBtn;
        if (this.props.product.isFavorite && this.props.isMine) {
            favBtn = <DeleteBtn
                isMine={this.props.isMine}
                handleMyFavorite={this.props.handleMyFavorite}
                text={this.props.text}
                product={this.props.product}
            />
        } else {
            favBtn = <DefaultBtn
                isMine={this.props.isMine}
                handleMyFavorite={this.props.handleMyFavorite}
                text={this.props.text}
                product={this.props.product}
            />
        }
        return (
            <ActionBar handleMyFavorite={this.props.handleMyFavorite}>
                {favBtn}
            </ActionBar>
        )
    }
}

export default ActionsBar;
