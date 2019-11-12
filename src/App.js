import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Main from "./pages/Main";
import Friends from "./pages/Friends";
import FriendPage from "./pages/FriendPage";
import MyPage from './pages/MyPage';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            myFavorites: [],
        };
    }

    componentDidMount() {
        const results = this.props.products.map(product => {
            product.isFavorite = false;
                return product;
            });
            this.setState({
                myFavorites: results
            });
    }

    handleMyFavorite = id => {
        const myFavoriteItems = this.state.myFavorites.map(wishItem => {
            if (wishItem.id === id) wishItem.isFavorite = !wishItem.isFavorite;
            console.log(wishItem.isFavorite);
            return wishItem;
        });
        this.setState({
            myFavorites: myFavoriteItems
        });
        console.log(myFavoriteItems)
    };

    render(){
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Main</Link>
                            </li>
                            <li>
                                <Link to="/friendslist">Search friends</Link>
                            </li>
                            <li>
                                <Link to="/friend">Fiend page</Link>
                            </li>
                            <li>
                                <Link to="/mypage">My page</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/friendslist">
                            <Friends user={this.props.me} friends={this.props.friends} />
                        </Route>
                        <Route path="/friend/:id">
                            <FriendPage user={this.props.me} friend={this.props.friends} products={this.props.products} />
                        </Route>
                        <Route path="/mypage">
                            <MyPage user={this.props.me} products={this.props.products} handleMyFavorite={this.handleMyFavorite} />
                        </Route>

                        <Route path="/">
                            <Main user={this.props.me} products={this.props.products} handleMyFavorite={this.handleMyFavorite}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}



export default App;
