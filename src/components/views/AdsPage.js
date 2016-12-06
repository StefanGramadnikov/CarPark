import React, {Component} from 'react';
import Ad from './AdBox/Ad';
import {loadAds} from '../../controllers/CarAdController';

export default class CatalogPage extends Component {
    constructor(props){
        super(props);
        this.state = {ads: []};
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }
    componentDidMount(){
        loadAds(this.onLoadSuccess);
    }
    onLoadSuccess(response){
        this.setState({ads: response});
    }
    render() {
        return (
            <div className="row">
                {this.state.ads.map((ad, i) => {return <Ad key={i} title={ad.title} make={ad.make} description={ad.description}
                                                             model={ad.model} year={ad.year}
                                                             price={ad.price} picture={ad.picture} adId={ad._id}/> })}
            </div>
        );
    }
}
