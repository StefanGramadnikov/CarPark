import React, {Component} from 'react';
import './Ad.css'
import {Link} from 'react-router'
export default class MyAd extends Component {
    constructor(props) {
        super(props);
        this.state = {desc: this.props.description};
        this.generateShortDescription(this.props.description);
    }

    generateShortDescription(asd){
        this.state.desc = asd.substr(0, 100) + '...';
    }
    render() {
        return (
            <div className="col-sm-6 col-md-4 ad">
                <div className="thumbnail">
                    <img src="http://www.usa.philips.com/c-dam/b2c/category-pages/lighting/car-lights/master/footer/nafta-car.png" alt="..."/>
                    <div className="caption">
                        <h3>{this.props.title}</h3>
                        <p>{this.state.desc}</p>
                        <p>
                            <a href="#" className="btn btn-primary" role="button">Preview</a>
                            <Link to={"/edit/" + this.props.adId} className="btn btn-default">Edit</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}