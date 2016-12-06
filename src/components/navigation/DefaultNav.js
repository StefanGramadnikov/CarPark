/**
 * Created by Tsenko Tsenov on 11/27/2016.
 */
import React, { Component } from 'react';
import {Link} from 'react-router';
import './Navigation.css';
class DefaultNav extends Component{
    render() {
        return (<div className="container" >
                <div className="navbar-header">
                    <a href="/" className="navbar-brand">Car Park</a>
                </div>
            <div className="navbar-collapse" id="navbar">
                <ul className="nav navbar-nav">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </div>
            </div>)
    }
}
export default DefaultNav;