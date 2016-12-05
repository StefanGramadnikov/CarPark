import React, {Component} from 'react';
import './Ad.css'
export default class Ad extends Component {
    render() {
        return (
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src="http://www.usa.philips.com/c-dam/b2c/category-pages/lighting/car-lights/master/footer/nafta-car.png" alt="..."/>
                        <div className="caption">
                            <h3>{this.props.title}</h3>
                            <p>{this.props.description}</p>
                            <p><a href="#" className="btn btn-primary" role="button">Button</a></p>
                        </div>
                </div>
            </div>
        );
    }
}