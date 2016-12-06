import React, {Component} from 'react';
import './ContactPage.css';

export default class ContactPage extends Component {
    render() {
        return (
        <div>
            <div className="container">
                <div className="jumbotron jumbotron-sm" id="jumbotron">
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">
                            <h1 className="h2">
                                Contacts
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="well">
                            <h3><i className="fa fa-home fa-1x"></i> Adress:</h3>
                            <p className="info">Bulgaria</p>
                            <br/>
                            <br/>
                            <h3><i className="fa fa-envelope fa-1x" ></i> E-Mail Address:</h3>
                            <p className="info">nepr@6tama.il</p>
                            <br />
                            <br />
                            <h3 ><i className="fa fa-user fa-1x"></i> The Boss:</h3>
                            <p>Pesho Goshov</p>
                            <br/>
                            <br/>
                            <h3><i className="fa fa-yelp fa-1x" ></i>Website for support</h3>
                            <p ><a href="http://m.memegen.com/pizxiv.jpg">Support</a></p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.661431420624!2d5.196111551360056!3d52.37655885450285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDIyJzM1LjYiTiA1wrAxMSc1My45IkU!5e0!3m2!1sen!2sus!4v1481061379757" width="565" height="430" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}