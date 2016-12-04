
import * as requester from '../services/AjaxService';
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
function addCar(formData, callback) {
    let userData = {
        formData
    };

    requester.post('user', 'login', userData, 'basic')
        .then((response) => { saveSession(response); callback(true)}).catch((err)=> callback(false));

}
export { addCar }