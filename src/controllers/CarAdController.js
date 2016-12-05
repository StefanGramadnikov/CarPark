import * as requester from '../services/AjaxService';
import * as notificator from '../services/NotificationBarService';

function addCar(formData, callback) {
    let userData = {
        formData
    };

    requester.post('user', 'login', userData, 'basic')
        .then((response) => addSuccess(response)).catch((err)=>addUnsuccess(err));
    
    function addSuccess(){
        
    }

    function addUnsuccess(err) {
        notificator.showError(err)
        callback(true);
    }
}
function loadAds(callback) {
    //Load all ads from Kinvey
    requester.get('appdata', 'ads', 'kinvey')
        .then(callback);
}
export { addCar, loadAds }