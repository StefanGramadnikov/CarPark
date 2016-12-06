import React, {Component} from 'react';
import Ad from './AdBox/Ad';
import {loadAds} from '../../controllers/CarAdController';
import $ from 'jquery'
export default class AdsPage extends Component {
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
        //Make all divs same height
        $( document ).ready(function() {
            var heights = $(".thumbnail").map(function() {
                    return $(this).height();
                }).get(),
                maxHeight = Math.max.apply(null, heights);
            $(".thumbnail").height(maxHeight);
        });
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
