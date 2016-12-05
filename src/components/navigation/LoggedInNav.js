/**
 * Created by Tsenko Tsenov on 11/27/2016.
 */
import React, { Component } from 'react';

import {Link} from 'react-router';
class LoggedInNav extends Component{
    render() {
        return (
            <div className="nav navbar-nav" >
                <Link to="/" className="navbar-brand">Home</Link>
                <Link to="/ads" className="navbar-brand">Ads</Link>
                <Link to="/myAds" className="navbar-brand">My ads</Link>
                <Link to="/newAd" className="navbar-brand">New Ad</Link>
                <Link to="/logout" className="navbar-brand">Logout</Link>
                <span className="greeting">Welcome, {this.props.username}</span>
            </div>)
    }
}
export default LoggedInNav;