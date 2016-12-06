/**
 * Created by Tsenko Tsenov on 11/27/2016.
 */
import React, { Component } from 'react';

import {Link} from 'react-router';
class LoggedInNav extends Component{
    render() {
        return (<div className="container" >
            <div className="navbar-header">
                <a href="/" className="navbar-brand">Car Park</a>
            </div>
            <div className="navbar-collapse" id="navbar">
                <ul className="nav navbar-nav">
                    <li><Link to="/ads">Ads</Link></li>
                    <li><Link to="/myAds">My ads</Link></li>
                    <li><Link to="/ads/create">New ad</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a className="greeting">Welcome, {this.props.username}</a></li>
                </ul>
            </div>
        </div>)
    }
}
export default LoggedInNav;