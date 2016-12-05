/**
 * Created by Tsenko Tsenov on 11/27/2016.
 */
import React, { Component } from 'react';
import {Link} from 'react-router';
import './Navigation.css';
class DefaultNav extends Component{
    render() {
        return (<div className="nav navbar-nav" >
            <Link to="/" className="navbar-brand">Home</Link>
            <Link to="/login" className="navbar-brand">Login</Link>
            <Link to="/register" className="navbar-brand">Register</Link>
        </div>)
    }
}
export default DefaultNav;