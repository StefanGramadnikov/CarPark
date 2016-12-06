import $ from 'jquery';

const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_r1woYIdzl";
const kinveyAppSecret = "e93e196d770e42d7bade0257cc09dce2";

function makeAuth(type) {
    switch (type) {
        case 'basic':
            return { 'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret) };
        case 'kinvey':
            return { 'Authorization': "Kinvey " + sessionStorage.getItem('authToken') };
        default: break;
    }
}
function get(module, uri, auth) {
    const kinveyLoginUrl = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" + uri;
    const kinveyAuthHeaders = makeAuth(auth);

    return $.ajax({
        method: "GET",
        url: kinveyLoginUrl,
        headers: kinveyAuthHeaders
    });
}
function post(module, uri, data, auth) {
    const kinveyLoginUrl = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" + uri;
    const kinveyAuthHeaders = makeAuth(auth);

    let request = {
        method: "POST",
        url: kinveyLoginUrl,
        headers: kinveyAuthHeaders
    };

    if (data !== null) {
        request.data = data;
    }
    return $.ajax(request);
}
function update(module, uri, data, auth) {
    const kinveyLoginUrl = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" + uri;
    const kinveyAuthHeaders = makeAuth(auth);

    let request = {
        method: "PUT",
        url: kinveyLoginUrl,
        headers: kinveyAuthHeaders,
        data: data
    };

    return $.ajax(request);
}

function uploadFileToKinvey(data) {
    const kinveyLoginUrl = kinveyBaseUrl + "blob/" + kinveyAppKey;
    const kinveyAuthHeaders = makeAuth('kinvey');

    console.log(kinveyAuthHeaders);

    let requestHeaders = {
        'Authorization': "Basic " + btoa("Go6o:qweqweqwe"),
        'Content-Type': data.mimeType,
        'X-Kinvey-Content-Type': data.mimeType
    };

    let request = {
        method: 'POST',
        url: kinveyLoginUrl,
        headers: requestHeaders,
        data: JSON.stringify(data)
    };

    $.ajax(request).then(
        function (response) {
            console.log(response);
        }).catch(
        function (error) {
            console.log(error);
        }
    );
}

function uploadFileToGoogle(data) {
    console.log(data);
}

export {get, post, update, uploadFileToKinvey, uploadFileToGoogle};