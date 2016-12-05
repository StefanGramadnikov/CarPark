import React, {Component} from 'react';
import LoginForm from '../forms/LoginForm';

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <span>Login Page</span>
                <LoginForm
                    username={this.state.username}
                    password={this.state.password}
                    submitDisabled={this.state.submitDisabled}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </div>
        );
    }
}

LoginPage.contextTypes = {
    router: React.PropTypes.object
};