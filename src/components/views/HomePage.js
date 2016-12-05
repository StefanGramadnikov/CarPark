import React, {Component} from 'react';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Car Park</h1>
                {this.props.children}
            </div>
        );
    }
}