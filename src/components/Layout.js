/**
 * Created by Tsenko Tsenov on 11/27/2016.
 */
import React from 'react';
import { Link } from 'react-router';
import Navigation from './navigation/Navigation.js';
import observer from '../services/Observer'

export default class Layout extends React.Component {
    constructor(props){
        super(props);
        this.state = { loggedIn: false, username: '' };
        this.onSessionUpdate = this.onSessionUpdate.bind(this);
    }
    componentDidMount() {
        observer.onSessionUpdate = this.onSessionUpdate
        this.onSessionUpdate();
    }

    onSessionUpdate() {
        let name = sessionStorage.getItem("username");
        if (name) {
            this.setState({ loggedIn: true, username: sessionStorage.getItem("username") });
        } else {
            this.setState({ loggedIn: false, username: '' });
        }
    }
    render() {
        return (
            <div className="container">
                <header className="navbar navbar-default">
                        <Navigation loggedIn={this.state.loggedIn} username={this.state.username} />
                </header>
                <div className="container-fluid">{this.props.children}</div>
                <footer className="footer">
                    <p>This is our app footer.(C)</p>
                </footer>
            </div>
        );
    }
}