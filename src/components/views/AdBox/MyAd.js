import React, {Component} from 'react';
import './Ad.css'
import {Link} from 'react-router'
import * as carAdController from '../../../controllers/CarAdController';

export default class MyAd extends Component {
    constructor(props) {
        super(props);
        this.state = {desc: this.props.description, picture: this.props.picture};
        this.generateShortDescription(this.props.description);
        this.deleteAd = this.deleteAd.bind(this);
        this.onDeleteSuccess = this.onDeleteSuccess.bind(this);
        this.generateDefaultPicutre();
    }
    generateDefaultPicutre(){
        if(this.props.picture == ''){
            this.state.picture = 'http://www.usa.philips.com/c-dam/b2c/category-pages/lighting/car-lights/master/footer/nafta-car.png'
        }
    }
    generateShortDescription(description){
        this.state.desc = description.substr(0, 100) + '...';
    }

    deleteAd(id) {
        carAdController.deleteAd(id, this.onDeleteSuccess);
    }

    onDeleteSuccess(response) {
        if (response === true) {
            this.context.router.push('/ads');
        }
    }

    render() {
        return (
            <div className="col-sm-6 col-md-4 ad">
                <div className="thumbnail">
                    <img className="img" src={this.state.picture} alt="picture"/>
                    <div className="caption">
                        <h3>{this.props.title}</h3>
                        <p>{this.state.desc}</p>
                        <div className="btn-group">
                            <Link to={"/ads/" + this.props.adId} className="btn btn-default">Preview</Link>
                            <Link to={"/edit/" + this.props.adId} className="btn btn-success">Edit</Link>
                            <button className="btn btn-danger" onClick={() => this.deleteAd(this.props.adId)}>Delete ad</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
MyAd.contextTypes = {
    router: React.PropTypes.object
};