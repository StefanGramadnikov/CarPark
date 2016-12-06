import * as requester from '../services/AjaxService';
import * as notificator from '../services/NotificationBarService';

function addCar(formData, callback) {

    let saveAdWithoutPicture = true;
    if ('picture' in formData && formData['picture'] !== '') {

        saveAdWithoutPicture = false;
        let picture = formData['picture'];

        let metaData = {
            '_filename': picture.name,
            'size': picture.size,
            'type': picture.type
        };

        let kinveyResponse = requester.uploadFileToKinvey(metaData).then(
            function (response) {
                console.log(response);
                formData.picture = response._id;
                requester.post('appdata', 'ads', formData, 'kinvey')
                    .then((response) => onRequestSuccess('Image uploaded to kinvey',response)).catch((err)=>onRequestError(err, callback));
            }
        );
        let googleResponse = kinveyResponse
            .then((response) => requester.uploadFileToGoogle(response).catch((err) => onRequestError(err)));

        googleResponse.then((response) => onRequestSuccess('Image uploaded', response))
            .catch((err)=>onRequestError(err));

    }

    if(saveAdWithoutPicture) {
        delete formData.picture;
        requester.post('appdata', 'ads', formData, 'kinvey')
            .then((response) => onRequestSuccess('Car ad created', callback)).catch((err)=>onRequestError(err, callback));
    }
}

function updateCar(formData, callback) {
    requester.update('appdata', 'ads/' + formData._id, formData, 'kinvey')
        .then((response) => onRequestSuccess('Car ad updated', callback)).catch((err)=>onRequestError(err, callback));
}

function deleteAd(id, callback) {
    console.log(id);
    requester.deleteRequest('appdata', 'ads/' + id, 'kinvey')
        .then((response) => onRequestSuccess('Car ad deleted successfully', callback)).catch((err)=>onRequestError(err));
}

function onRequestSuccess(message, callback){
    notificator.showNotification('success', message);
    callback(true);
}

function onRequestError(message, callback) {
    notificator.showError(message);
    callback(false);
}

function loadAds(callback) {
    requester.get('appdata', 'ads', 'kinvey').then(callback);
}

function loadAd(adId, callback) {
    requester.get('appdata', 'ads/' + adId, 'kinvey').then(callback)
        .catch((err) => onRequestError(err));
}

function buildObjectForPrepopulation(data) {
    return { make: data.make, model: data.model,
            year: data.year, price: data.price,
            title: data.title, description: data.description,
            submitDisabled: false, validatedFormFields: {
                make: true,
                model: true,
                year: true,
                price: true,
                title: true,
                description: true
            }
    };

}

export {addCar, loadAds, loadAd, buildObjectForPrepopulation, updateCar, deleteAd}
