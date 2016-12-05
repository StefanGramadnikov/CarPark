import * as requester from '../services/AjaxService';
import * as notificator from '../services/NotificationBarService';

function addCar(formData, callback) {

    requester.post('appdata', 'ads', formData, 'kinvey')
        .then((response) => addSuccess(response)).catch((err)=>addUnsuccess(err));

    function addSuccess(){
        notificator.showNotification('success', 'Add created !');
        callback(true);
    }

    function addUnsuccess(err) {
        notificator.showError(err);
        callback(false);
    }
}function loadAds(callback) {
    //Load all ads from Kinvey
    requester.get('appdata', 'ads', 'kinvey').then(callback);
}
export { addCar, loadAds }
