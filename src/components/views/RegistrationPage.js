/**
 * Created by Tsenko Tsenov on 12/4/2016.
 */
import React, {Component} from 'react';
import RegisterForm from '../forms/RegistrationForm';
import {register} from '../../controllers/UserController';
//import observer from '../../models/observer'

export default class RegisterPage extends Component {
    render() {
        return (
            <div>
                <span>Register Page</span>
                <RegisterForm
                    username={this.state.username}
                    password={this.state.password}
                    repeat={this.state.repeat}
                    submitDisabled={this.state.submitDisabled}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </div>
        );
    }
}

RegisterPage.contextTypes = {
    router: React.PropTypes.object
};