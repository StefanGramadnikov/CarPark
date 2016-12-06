import { browserHistory } from 'react-router'
import * as notificator from './NotificationBarService'

// Go back to previous location using promises to show message.
function authenticate() {
    if(!sessionStorage.getItem('authToken')){
        function redirect() {
            let promise = new Promise(function (resolve, reject) {
                browserHistory.push('/login')
                resolve(redirect);
            });

            return promise;
        }
        function showMessage() {
            let promise = new Promise(function (resolve, reject) {
                notificator.showNotification('message', 'You have to be logged in to see this page.')
                resolve(showMessage);
            });

            return promise;
        }
        redirect().then(showMessage)
    }
}
function redirectIfRegistered() {
    if(sessionStorage.getItem('authToken')){
        function redirect() {
            let promise = new Promise(function (resolve, reject) {
                browserHistory.push('/ads')
                resolve(redirect);
            });

            return promise;
        }
        function showMessage() {
            let promise = new Promise(function (resolve, reject) {
                notificator.showNotification('message', 'You are already registered and logged in.')
                resolve(showMessage);
            });

            return promise;
        }
        redirect().then(showMessage)
    }
}
export {authenticate, redirectIfRegistered}