import $ from 'jquery'
/* Type - error, message or success
* Error dont use description, message and success use description as third parameter but err must be null*/
function showNotificationBar(type, err, description) {
    switch (type){
        case 'error':
            let errorDiv = $('<div class="alert alert-danger"></div>')
            errorDiv.prepend($('<strong>').text(JSON.parse(err.responseText)['description']));
            $('.container').prepend(errorDiv)
                errorDiv.fadeOut(10000)
                setTimeout(function(){errorDiv.remove() }, 7500);
            break;
        case 'message':
            let messageDiv = $('<div class="alert alert-info"></div>')
            messageDiv.prepend($('<strong>').text(description));
            $('.container').prepend(messageDiv)
            messageDiv.fadeOut(10000)
            setTimeout(function(){messageDiv.remove() }, 7500);
            break;
        case 'success':
            let successDiv = $('<div class="alert alert-success"></div>')
            successDiv.prepend($('<strong>').text(description));
            $('.container').prepend(successDiv)
            successDiv.fadeOut(10000)
            setTimeout(function(){successDiv.remove() }, 7500);
            break;
            break;
    }
}
export {showNotificationBar}