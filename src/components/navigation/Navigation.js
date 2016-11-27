/**
 * Created by Tsenko Tsenov on 11/27/2016.
 */
import React, { Component } from 'react';
import './Navigation.css';
import DefaultNav from './DefaultNav.js';
import LoggedInNav from './LoggedInNav.js';
class Navigation extends Component{
    render() {
        if (sessionStorage.getItem('authToken')) {
            return <LoggedInNav/>
        } else {
            return <DefaultNav/>
        }
    }
}
export default Navigation;