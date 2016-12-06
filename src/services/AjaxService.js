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

// function uploadFileToKinvey(data) {
//     const kinveyLoginUrl = kinveyBaseUrl + "blob/" + kinveyAppKey;
//     const kinveyAuthHeaders = makeAuth('kinvey');
//
//     let requestHeaders = {
//         'Authorization': "Basic " + btoa("upload:upload"),
//         'Content-Type': 'application/json',
//         'X-Kinvey-Content-Type': data.mimeType
//     };
//
//     let request = {
//         method: 'POST',
//         url: kinveyLoginUrl,
//         headers: requestHeaders,
//         data: JSON.stringify(data)
//     };
//
//     return $.ajax(request);
// }
//
// function uploadFileToGoogle(data, file) {
//
//     let innerH = data._requiredHeaders;
//     innerH['Content-Type']= file.type;
//     innerH['Content-Length']= file.mimeSize;
//     let uploadURL = data.uploadURL;
//
//     let request = {
//         method: 'PUT',
//         url: uploadURL,
//         headers: innerH,
//         processData: false,
//         data: file
//     };
//
//     return $.ajax(request);
// }

export {get, post, update};