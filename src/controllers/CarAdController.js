import * as requester from '../services/AjaxService';
import * as notificator from '../services/NotificationBarService';
import * as fileService from '../services/FileService';

function addCar(formData, callback) {

    if ('picture' in formData && formData['picture'] !== '') {

        let picture = formData['picture'];

        let metaData = {
            '_filename': picture.name,
            'size': picture.size,
            'type': picture.type
        };

        let kinveyResponse = requester.uploadFileToKinvey(metaData);
        let googleResponse = kinveyResponse
            .then((response) => requester.uploadFileToGoogle(response).catch((err) => addUnsuccess(err)));

        googleResponse.then((response) => addSuccess(response))
            .catch((err)=>addUnsuccess(err));


        delete formData.picture;
    }

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
