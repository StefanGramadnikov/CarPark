import React, {Component} from 'react';
import observer from '../../services/Observer'
import {logout} from '../../controllers/UserController'

export default class LogoutPage extends Component {
    constructor(props) {
        super(props);
        this.logout();
    }

    logout() {
        logout(this.onSubmitResponse.bind(this));
    }

    onSubmitResponse(response) {
        if (response === true) {
            // Redirect
            this.context.router.push('/');
        } else {
            return
        }
        observer.onSessionUpdate()
    }

    render() {
        return (
            <div>
                <span>Logout Page</span>
            </div>
        );
    }
}

LogoutPage.contextTypes = {
    router: React.PropTypes.object
};