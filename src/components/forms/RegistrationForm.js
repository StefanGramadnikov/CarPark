/**
 * Created by Tsenko Tsenov on 11/27/2016.
 */
import React, {Component} from 'react';
import observer from '../../services/Observer'
import {register} from '../../controllers/UserController'
class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', repeat: '', submitDisabled: false };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onRegisterSuccess = this.onRegisterSuccess.bind(this);
    }

    onChangeHandler(event) {
        event.preventDefault()
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState)
    }

    onSubmitHandler(event) {
        event.preventDefault();
        if (this.state.password !== this.state.repeat) {
            alert("Passwords don't match");
            return;
        }
        this.setState({ submitDisabled: true });
        register(this.state.username, this.state.password, this.onRegisterSuccess);
    }

    onRegisterSuccess(response) {
        if (response === true) {
            // Navigate away from register page
            this.context.router.push('/');
            this.setState({ submitDisabled: false });
        } else {
            // Something went wrong, let the user try again
            this.setState({ submitDisabled: true });
        }
        observer.onSessionUpdate()
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        value={this.state.username}
                        disabled={this.state.submitDisabled}
                        onChange={this.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={this.state.password}
                        disabled={this.state.submitDisabled}
                        onChange={this.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Repeat Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        name="repeat"
                        value={this.state.repeat}
                        disabled={this.state.submitDisabled}
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