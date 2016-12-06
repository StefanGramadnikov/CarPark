import React, {Component} from 'react';
import MyAd from './AdBox/MyAd';
import {loadAds} from '../../controllers/CarAdController';
import $ from 'jquery';
import * as authenticator from '../../services/AuthValidationService';
export default class MyAdsPage extends Component {
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
        authenticator.authenticate();
        return (
            <div className="row">
                {
                    this.state.ads.map((ad, i) => {
                        if(sessionStorage.getItem('userId') === ad._acl.creator)
                        {
                            return <MyAd key={i} title={ad.title} make={ad.make}
                                         description={ad.description}
                                         model={ad.model} year={ad.year}
                                         price={ad.price} adId={ad._id}
                                         picture={ad.picture}
                                    />
                        }
                    })
                }
            </div>
        );
    }
}