import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
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

    render(){
        return (
            <Router>
                    <Switch>
                        <Route path="/friendslist">
                            <Friends user={this.props.me} friends={this.props.friends} />
                        </Route>
                        <Route path="/friend/:id">
                            <FriendPage user={this.props.me} friend={this.props.friends} />
                        </Route>
                        <Route path="/mypage">
                            <MyPage user={this.props.me} />
                        </Route>

                        <Route path="/">
                            <Main user={this.props.me} />
                        </Route>
                    </Switch>
            </Router>
        );
    }
}



export default App;
