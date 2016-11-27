/**
 * Created by Tsenko Tsenov on 11/27/2016.
 */
import React, { Component } from 'react';
import './Navigation.css';
class DefaultNav extends Component{
    render() {
        return (<div id="header">
            <a href="">Home</a>
            <a href="">Login</a>
            <a href="">Register</a>
        </div>)
    }
}
export default DefaultNav;