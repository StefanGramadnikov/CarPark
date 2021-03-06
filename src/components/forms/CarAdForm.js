/* eslint-disable */

import React, {Component} from 'react';
import {addCar} from '../../controllers/CarAdController';
import {loadAd} from '../../controllers/CarAdController';
import {updateCar} from '../../controllers/CarAdController';
import {buildObjectForPrepopulation} from '../../controllers/CarAdController';
import * as validator from '../../services/ValidatorService';
import * as authenticator from '../../services/AuthValidationService';
class CarAdForm extends Component {

    constructor(props) {
        super(props);
        this.loggedIn = this.props.loggedIn;
        this.state = { make: '', model: '', year: '', price: '', picture: '', title: '', description: '', submitDisabled: true, validatedFormFields: {
            make: false,
            model: false,
            year: false,
            price: false,
            title: false,
            description: false
        }};
        this.bindEventHandlers();
    }

    componentDidMount() {
        if ('adId' in this.props.routeParams) {
            this.state._id =  this.props.routeParams['adId'];
            loadAd(this.state._id, this.onLoadSuccess);
        }
    }

    onLoadSuccess(response) {
        let carAd = buildObjectForPrepopulation(response);
        this.setState(carAd);
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onNewCarAdd = this.onNewCarAdd.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onPictureSelect = this.onPictureSelect.bind(this);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onChangeHandler(event) {
        event.preventDefault();

        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);

        let isFieldValid = validator.validate(event.target.name, event.target.value) === null;
        this.state.validatedFormFields[event.target.name] = isFieldValid;

        this.state.submitDisabled = !validator.validateForm(this.state.validatedFormFields);
    }

    onPictureSelect(event) {
        let newState = {};
        newState[event.target.name] = event.target.files[0];
        this.setState(newState);
    }

    onBlurHandler(event) {
        let errorMessage = validator.validate(event.target.name, event.target.value);
        validator.buildMessage(event.target.name, errorMessage);
    }

    onSubmitHandler(event) {
        event.preventDefault();

        let formData = this.state;
        delete formData.validatedFormFields;
        delete formData.submitDisabled;

        this.setState({ submitDisabled: true });
        if ('_id' in this.state) {
            updateCar(formData, this.onNewCarAdd)
        } else {
            addCar(formData, this.onNewCarAdd);
        }
    }

    onNewCarAdd(response) {
        if (response === true) {
            this.context.router.push('/ads');
        } else {
            this.setState({ submitDisabled: false });
        }
    }

    render() {
        authenticator.authenticate();
        return (
            <form onSubmit={this.onSubmitHandler} >
                <div id="title" className="form-group">
                    <label>Title: </label>
                    <input
                        className="form-control"
                        type="text"
                        name="title"
                        value={this.state.title}
                        onBlur={this.onBlurHandler}
                        onChange={this.onChangeHandler}
                    />
                </div>
                <div id="make" className="form-group">
                    <label>Make: </label>
                    <input
                        className="form-control"
                        type="text"
                        name="make"
                        value={this.state.make}
                        onBlur={this.onBlurHandler}
                        onChange={this.onChangeHandler}
                    />
                </div>
                <div id="model" className="form-group">
                    <label>Model: </label>
                    <input
                        className="form-control"
                        type="text"
                        name="model"
                        value={this.state.model}
                        onBlur={this.onBlurHandler}
                        onChange={this.onChangeHandler}
                    />
                </div>
                <div id="year" className="form-group">
                    <label>Year: </label>
                    <input
                        className="form-control"
                        type="text"
                        name="year"
                        value={this.state.year}
                        onBlur={this.onBlurHandler}
                        onChange={this.onChangeHandler}
                    />
                </div>
                <div id="description" className="form-group">
                    <label>Description: </label>
                    <textarea
                        className="form-control"
                        type="text"
                        name="description"
                        value={this.state.description}
                        onBlur={this.onBlurHandler}
                        onChange={this.onChangeHandler}
                    />
                </div>
                <div id="price" className="form-group">
                    <label className="control-label" >Price: </label>
                    <div className="input-group">
                        <span className="input-group-addon">$</span>
                        <input
                            className="form-control"
                            type="text"
                            name="price"
                            placeholder="Amount"
                            value={this.state.price}
                            onBlur={this.onBlurHandler}
                            onChange={this.onChangeHandler}
                        />
                    </div>
                </div>
                <div id="picture" className="form-group">
                    <label>Picture: </label>
                    <input
                        className="form-control"
                        type="text"
                        name="picture"
                        value={this.state.picture}
                        onBlur={this.onBlurHandler}
                        onChange={this.onChangeHandler}
                    />
                </div>
                <input className="btn btn-default" type="submit" value="Submit" disabled={this.state.submitDisabled}/>
            </form>
        );
    }
}
CarAdForm.contextTypes = {
    router: React.PropTypes.object
};
export default CarAdForm;