import React, {Component} from 'react';
import './Ad.css'
import {Link} from 'react-router'
export default class Ad extends Component {
    constructor(props) {
        super(props);
        this.state = {desc: this.props.description, picture: this.props.picture};
        this.generateShortDescription(this.props.description);
        this.generateDefaultPicutre();
    }
    generateDefaultPicutre(){
        if(this.props.picture == ''){
            this.state.picture = 'http://www.usa.philips.com/c-dam/b2c/category-pages/lighting/car-lights/master/footer/nafta-car.png'
        }
    }
    generateShortDescription(asd){
        this.state.desc = asd.substr(0, 100) + '...';
    }
    render() {
        return (
            <div className="col-sm-6 col-md-4 ad">
                <div className="thumbnail">
                    <img src={this.state.picture} alt="picture"/>
                        <div className="caption">
                            <h3>{this.props.title}</h3>
                            <p>{this.state.desc}</p>
                            <p>
                                <Link to={"/ads/" + this.props.adId} className="btn btn-default">Preview</Link>
                            </p>
                        </div>
                </div>
            </div>
        );
    }
}