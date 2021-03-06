import React, {Component} from 'react';
import observer from '../../services/Observer'
import * as validator from '../../services/ValidatorService';
import {register} from '../../controllers/UserController'
import * as notificator from '../../services/NotificationBarService'
import * as authenticator from '../../services/AuthValidationService'
class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', repeat: '', submitDisabled: true, validatedFormFields: {
            username: false,
            password: false,
            repeat: false,
        }};
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onRegisterSuccess = this.onRegisterSuccess.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
        let isFieldValid = validator.validate(event.target.name, event.target.value) === null;
        this.state.validatedFormFields[event.target.name] = isFieldValid;
        this.state.submitDisabled = !validator.validateForm(this.state.validatedFormFields);
    }
    onBlurHandler(event) {
        let errorMessage = validator.validate(event.target.name, event.target.value);
        validator.buildMessage(event.target.name, errorMessage);
    }
    onSubmitHandler(event) {
        event.preventDefault();
        if (this.state.password !== this.state.repeat) {
            notificator.showNotification('message', "Passwords don't match");
            return;
        }
        if (this.state.password === '' || this.state.username === '') {
            notificator.showNotification('message', "There are blank fields.");
            return;
        }
        this.setState({ submitDisabled: true });
        register(this.state.username, this.state.password, this.onRegisterSuccess);
    }

    onRegisterSuccess(response) {
        if (response === true ) {
            this.context.router.push('/');
        }
        this.setState({ submitDisabled: false });
        observer.onSessionUpdate()
    }

    render() {
        authenticator.redirectIfRegistered();
        return (
            <form onSubmit={this.onSubmitHandler} className="text-left col-md-5 col-md-offset-4">
                <div id='username' className="form-group">
                    <label>Username:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onBlur={this.onBlurHandler}
                        onChange={this.onChangeHandler}
                    />
                </div>
                <div id='password' className="form-group">
                    <label>Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onBlur={this.onBlurHandler}
                        onChange={this.onChangeHandler}
                    />
                </div>
                <div id='repeat' className="form-group">
                    <label>Repeat Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        name="repeat"
                        value={this.state.repeat}
                        onBlur={this.onBlurHandler}
                        onChange={this.onChangeHandler}
                    />
                </div>
                <input className="btn btn-default" type="submit" value="Register" disabled={this.state.submitDisabled}/>
            </form>
        );
    }
}
RegistrationForm.contextTypes = {
    router: React.PropTypes.object
};
export default RegistrationForm;