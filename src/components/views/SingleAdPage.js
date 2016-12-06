import React, {Component} from 'react';
import {loadAd} from '../../controllers/CarAdController';
import {Link} from 'react-router';

export default class SingleAdPage extends Component {
    constructor(props){
        super(props);
        this.state = {ad: ''};
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }
    componentDidMount(){
        if ('adId' in this.props.routeParams) {
            this.state._id =  this.props.routeParams['adId'];
            loadAd(this.state._id, this.onLoadSuccess);
        }
    }
    onLoadSuccess(response){
        if(response.picture === ''){
            response.picture = 'http://www.usa.philips.com/c-dam/b2c/category-pages/lighting/car-lights/master/footer/nafta-car.png'
        }
        this.setState({ad: response});
    }
    render() {
        return (
            <div className="container container-table ">
                <div className="thumbnail">
                    <img src={this.state.ad.picture} alt="Car" className="img-responsive"/>
                </div>
                <div className="caption-full">
                    <h4 className="pull-right"><strong className="bg-success">${this.state.ad.price}</strong></h4>
                    <h2>{this.state.ad.title}</h2>
                    <h4><strong>Description:</strong> {this.state.ad.description}</h4>
                    <h4><strong>Make:</strong> {this.state.ad.make}</h4>
                    <h4><strong>Model:</strong> {this.state.ad.model}</h4>
                    <h4><strong>Year:</strong> {this.state.ad.year}</h4>
                    <p>
                        <span className="glyphicon glyphicon-star"/>
                        <span className="glyphicon glyphicon-star"/>
                        <span className="glyphicon glyphicon-star"/>
                        <span className="glyphicon glyphicon-star"/>
                        <span className="glyphicon glyphicon-star"/>
                    </p>
                    <Link to={"/contacts"} className="btn btn-success">Contact us</Link>
                </div>
            </div>
        );
    }
}
