import React from 'react';
import api from "../../api";
import Header from "../../components/Header";
import Wishlist from "../../components/Wishlist";
import User from "../../components/User";

class MyPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

    componentDidMount = async () => {
        const data_products = await api(
            `/api/wishlist/get?id=${window.user_id}&uid=${window.user_id}`,
            'GET',
            { id: window.user_id }
        );

        const products = [];
        for (let product of data_products.response.wishlist) {
            products.push(
                {
                    id: product.id,
                    img: product.photo,
                    title: product.name,
                    price: product.price,
                }
            )
        }

        this.setState({
            products: products,
        })
    };

    refreshFavorite = (id) => {
        this.setState(prevState => ({
            products: prevState.products.filter(el => el.id !== id)
        }));
    };

    render(){
        return(
            <>
                <Header
                    isHideLeft
                    user={this.props.user}
                    textLeft={"Вернуться к поиску"}
                    textRight={"Мои друзья"}
                    linkToLeft={"/"}
                    linkToRight={"/friendslist"}
                />
                <User
                    text={"Поделиться"}
                    avatarWidth="150px"
                    user={this.props.user}
                />
                <Wishlist
                    isMine
                    products={this.state.products}
                    refreshFavorite={this.refreshFavorite}
                />
            </>
        )
    }
}

export default MyPage;
