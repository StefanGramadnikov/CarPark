/**
 * Created by Tsenko Tsenov on 11/27/2016.
 */
import React from 'react';
import { Link } from 'react-router';
import Navigation from './navigation/Navigation.js';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="app-container">
                <header>
                    <Link to="/">
                        TODO:{/*TODO:<img className="logo" src=""/>*/}
                    </Link>
                    <Navigation/>
                </header>
                <div className="app-content">{this.props.children}</div>
                <footer>
                    <p>
                        TODO: Footer
                    </p>
                </footer>
            </div>
        );
    }
}