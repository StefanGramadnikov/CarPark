import $ from 'jquery'
/* showError recieves ajax response
* showNotification - type: message or success and custom description */
function showError(err) {
    let errorDiv = $('<div class="alert alert-danger"></div>')
    errorDiv.append($('<strong>').text(JSON.parse(err.responseText)['description']));
    $('.navbar-default').after(errorDiv)
    errorDiv.fadeOut(10000)
    setTimeout(function () {
        errorDiv.remove()
    }, 7500);
}
function showNotification(type, description) {
    switch (type) {
        case 'message':
            let messageDiv = $('<div class="alert alert-info"></div>')
            messageDiv.append($('<strong>').text(description));
            $('.navbar-default').after(messageDiv)
            messageDiv.fadeOut(10000)
            setTimeout(function () {
                messageDiv.remove()
            }, 7500);
            break;
        case 'success':
            let successDiv = $('<div class="alert alert-success"></div>')
            successDiv.append($('<strong>').text(description));
            $('.navbar-default').after(successDiv)
            successDiv.fadeOut(10000)
            setTimeout(function () {
                successDiv.remove()
            }, 7500);
            break;
    }
}
export {showNotification, showError }