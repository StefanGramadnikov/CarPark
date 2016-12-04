import React, {Component} from 'react';
import {addCar} from '../../controllers/CarAdController';
import * as validator from '../../services/ValidatorService';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = { make: '', model: '', year: '', price: '', picture: '', submitDisabled: false };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onNewCarAdd = this.onNewCarAdd.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);
    }

    onChangeHandler(event) {
        event.preventDefault();

        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState)
    }

    onBlurHandler(event) {
        let errorMessage = validator.validate(event.target.name, event.target.value);
        validator.buildMessage(event.target.name, errorMessage);
    }

    onSubmitHandler(event) {
        event.preventDefault();

        this.setState({ submitDisabled: true });
        addCar(this.state, this.onNewCarAdd);
    }

    onNewCarAdd(response) {
        if (response === true) {
            // Navigate to index page
            // Show flash message
            this.context.router.push('/ads');
        } else {
            // Something went wrong, let the user try again
            // Show flash message
            this.setState({ submitDisabled: true });
        }
    }

    render() {
        return (
            <form className="" onSubmit={this.onSubmitHandler}>
                <div id="make" className="form-group">
                    <label>Make: </label>
                    <input
                        className="form-control"
                        type="text"
                        name="make"
                        value={this.state.make}
                        disabled={this.state.submitDisabled}
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
                        disabled={this.state.submitDisabled}
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
                        disabled={this.state.submitDisabled}
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
                            disabled={this.state.submitDisabled}
                            onBlur={this.onBlurHandler}
                            onChange={this.onChangeHandler}
                        />
                    </div>
                </div>
                <div id="picture" className="form-group">
                    <label >Picture: </label>
                    <input
                        type="file"
                        name="picture"
                        value={this.state.picture}
                        disabled={this.state.submitDisabled}
                        onBlur={this.onBlurHandler}
                        onChange={this.onChangeHandler}
                    />
                    <p className="help-block">Choose a file from your PC</p>
                </div>
                <input className="btn btn-default" type="submit" value="Submit" disabled={this.state.submitDisabled}/>
            </form>
        );
    }
}
RegistrationForm.contextTypes = {
    router: React.PropTypes.object
};
export default RegistrationForm;