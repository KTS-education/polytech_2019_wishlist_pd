import React, {Fragment} from 'react';
import styled from "styled-components";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Wishlist from "../../components/Wishlist";
import Pending from "../../components/Pending";
import { Label } from './../../styles/styles.js';

const Content = styled.div`
  padding: 0em 0em 1.5em;
`;

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          isLoading: false,
        }
    };

    render(){
        const { isLoading } = this.state;
        if (isLoading) {
            return <Pending/>;
        }
        return(
            <Content>
                <Header
                    user={this.props.user}
                    linkToRight={"/friendslist"}
                    textRight={"Мои друзья"}
                    linkToLeft={"/mypage"}
                />
                <Fragment>
                    <Label>
                        <span>Вишлист</span>
                        <span className="ec ec-heart-eyes"></span>
                    </Label>
                    <Input searchPlaceholder={"Введите название товара"}/>
                    {/*{suggestions.map((sugg, idx) => <p key={idx}> {sugg} </p>)}*/}
                    <Wishlist isMine products={this.props.products} handleMyFavorite={this.props.handleMyFavorite}/>
                </Fragment>
            </Content>
        )
    }
}

export default Main;
