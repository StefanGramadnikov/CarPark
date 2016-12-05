/**
 * Created by Tsenko Tsenov on 12/4/2016.
 */
import * as requester from '../services/AjaxService';
import * as notificator from '../services/NotificationBarService';
import observer from '../services/Observer';


function saveSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('teamId', userInfo.teamId);

    observer.onSessionUpdate();
}

// user/login
function login(username, password, callback) {
    let userData = {
        username,
        password
    };

    requester.post('user', 'login', userData, 'basic')
        .then((response) => loginSuccess(response)).catch((err)=> loginUnsuccess(err));

    function loginSuccess(userInfo) {
        saveSession(userInfo);
        notificator.showNotificationBar('success', null, 'Login successful!')
        callback(true);
    }
    function loginUnsuccess(err) {
        notificator.showNotificationBar('error', err)
        callback(true)
    }
}

// user/register
function register(username, password, callback) {
    let userData = {
        username,
        password
    };

    requester.post('user', '', userData, 'basic')
        .then((response) => registerSuccess(response)).catch((err)=>registerUnsuccess(err));

    function registerSuccess(userInfo) {
        saveSession(userInfo);
        notificator.showNotificationBar('success', null, 'Registration successful!')
    }
    function registerUnsuccess(err) {
        notificator.showNotificationBar('error', err)
        callback(true);
    }
}
function logout(callback) {
    requester.post('user', '_logout', null, 'kinvey')
        .then(logoutSuccess);


    function logoutSuccess(response) {
        sessionStorage.clear();
        observer.onSessionUpdate();
        notificator.showNotificationBar('success', null, 'Logout successful!')
        callback(true);
    }
}
export {login, register, logout }