/**
 * Created by Tsenko Tsenov on 11/27/2016.
 */
import React, { Component } from 'react';
import DefaultNav from './DefaultNav.js';
import LoggedInNav from './LoggedInNav.js';
class Navigation extends Component{
    render() {
        if (sessionStorage.getItem('authToken')) {
            return <LoggedInNav loggedIn={this.props.loggedIn} username={this.props.username}/>
        } else {
            return <DefaultNav loggedIn={this.props.loggedIn} username={this.props.username}/>
        }
    }
}
export default Navigation;