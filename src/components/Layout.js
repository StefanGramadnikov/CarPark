
import React from 'react';
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
        return (<div className="wrapper">
                <header className="navbar navbar-default">
                        <Navigation loggedIn={this.state.loggedIn} username={this.state.username} />
                </header>
                <div className="container">{this.props.children}</div>
                <footer className="footer">
                    <div className="container">
                        <p className="text-muted">This is our app footer.(C)</p>
                    </div>
                </footer>
            </div>
        );
    }
}