import React, {Component} from 'react';
import observer from '../../services/Observer'
import * as validator from '../../services/ValidatorService';
import {login} from '../../controllers/UserController'
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', submitDisabled: true };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);
    }
    onBlurHandler(event) {
        let errorMessage = validator.validate(event.target.name, event.target.value);
        validator.buildMessage(event.target.name, errorMessage);
    }
    onChangeHandler(event) {
        event.preventDefault()
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState)
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.setState({ submitDisabled: true });
        login(this.state.username, this.state.password, this.onLoginSuccess);
    }

    onLoginSuccess(response) {
        if (response === true ) {
            this.context.router.push('/');
        }
        this.setState({ submitDisabled: false });
        observer.onSessionUpdate()
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler} className="text-left">
                <div id='username' className="form-group">
                    <label>Username:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        onBlur={this.onBlurHandler}
                        value={this.state.username}
                        onChange={this.onChangeHandler}
                    />
                </div>
                <div id='password' className="form-group">
                    <label>Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        onBlur={this.onBlurHandler}
                        value={this.state.password}
                        onChange={this.onChangeHandler}
                    />
                </div>
                <input className="btn btn-default" type="submit" value="Login" disabled={this.state.submitDisabled}/>
            </form>
        );
    }
}

LoginForm.contextTypes = {
    router: React.PropTypes.object
};

export default LoginForm;
