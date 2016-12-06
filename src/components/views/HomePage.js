import React, {Component} from 'react';

export default class HomePage extends Component {
    render() {
        if (sessionStorage.getItem('authToken')) {
            return (
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-3">Car Park</h1>
                        <p>
                            Welcome back, {sessionStorage.getItem('username')} !
                        </p>
                        <p>
                            Our team wishes you good luck.
                        </p>
                        <a className="btn btn-primary btn-lg" href="ads" role="button">Ads »</a>
                        {this.props.children}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-3">Car Park</h1>
                        <p>
                            Welcome to
                            <stron> Car Park</stron>
                            , we will sell your car for you!
                            If you have a car for sale or looking for new car, please register and proceed.
                        </p>
                        <a className="btn btn-primary btn-lg" href="register" role="button">Register »</a>
                        {this.props.children}
                    </div>
                </div>
            );
        }
    }
}