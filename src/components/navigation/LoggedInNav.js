/**
 * Created by Tsenko Tsenov on 11/27/2016.
 */
import React, { Component } from 'react';
import './Navigation.css';
class LoggedInNav extends Component{
    render() {
        return (<div id="header">
                        <a href="">Home</a>
                        <a href="">Ads</a>
                        <a href="">Add Ad</a>
                        <a href="">Logout</a>
                    </div>)
    }
}
export default LoggedInNav;