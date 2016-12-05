import $ from 'jquery';

const textField = ['make', 'model', 'password', 'username', 'repeat'];
const wholeNumberFields = [];
const numberFields = ['price'];
const emailFields = ['email'];

const minTextLength = 3;
const maxTextLength = 30;
const maxNumberLength = 1000000000;
const decimalNumbersRegex = /^[1-9]\d*(\.\d+)?$/;
const wholeNumbersRegex = /^[1-9]\d*$/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validate(model, value) {

    if (textField.includes(model)) {
        return validateTextField(model, value);
    } else if (numberFields.includes(model)) {
        return validateNumberField(model, value, true);
    } else if (wholeNumberFields.includes(model)) {
        return validateNumberField(model, value, false);
    } else if (emailFields.includes(model)) {
        return validateEmailField(model, value);
    } else if (model === 'year') {
        return validateYearField(model, value);
    }

}

function validateTextField(model, value) {

    let message = null;

    if (value === '' || value === null) {
        message = "The " + model + " can't be empty !";
    } else if (value.length <= minTextLength) {
        message = "The " + model + " must be at least " + minTextLength + " characters long !";
    } else if (value.length >= maxTextLength) {
        message = "The " + model + " can't be more than " + maxTextLength + " characters long !";
    }

    return message;
}

function validateNumberField(model, value, decimalField) {
    let message = null;

    if (value === '' || value === null) {
        message = "The " + model + " can't be empty !";
    } else if (value < 0) {
        message = "The " + model + " can't be a negative number !";
    } else if (value > maxNumberLength) {
        message = "The " + model + " can't be more than " + maxNumberLength + " !";
    } else if (decimalField && !decimalNumbersRegex.test(value)) {
        message = "Invalid number !";
    } else if (!decimalField && !wholeNumbersRegex.test(value)) {
        message = "Invalid number !"
    }

    return message;
}

function validateEmailField(model, value) {

    let message = validateTextField(model, value);
    if (!emailRegex.test(value)) {
        message = 'Invalid email !';
    }

    return message;
}

function validateYearField(model, value) {

    let message = validateNumberField(model, value, false);
    if (value < 1800 || value > 2017) {
        message = 'Please enter a valid year of manufacture!';
    }

    return message;
}

function buildMessage(model, errorMessage) {

    let errorObjId = '#' + model;
    let helpBlockId = '#' + model + '-help-block';
    let errorObj = $(errorObjId);

    let helpBlock = document.getElementById(helpBlockId);

    if (helpBlock !== null && errorMessage !== null) {
        helpBlock.innerHTML = errorMessage;
    } else if (helpBlock === null  && errorMessage !== null) {
        helpBlock = $('<span id="header" class="help-block"></span>');
        helpBlock.attr('id', helpBlockId);
        helpBlock.text(errorMessage);
        errorObj.append(helpBlock);
        errorObj.addClass('has-error');
    } else if (helpBlock !== null && errorMessage === null) {
        let parentNode = helpBlock.parentNode;
        parentNode.removeChild(helpBlock);
        errorObj.removeClass('has-error');
    }

    return errorMessage === null;
}

function validateForm(formFields) {

    for (let formField in formFields) {
        console.log(formFields[formField]);
        if (formFields[formField]) {
            continue;
        }

        return false;
    }

    return true;
}

export {validate, buildMessage, validateForm};