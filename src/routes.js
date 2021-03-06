import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import RegistrationForm from './components/forms/RegistrationForm';
import LoginForm from './components/forms/LoginForm';
import IndexPage from './components/views/HomePage';
import LogoutPage from './components/views/LogoutPage';
import AdsPage from './components/views/AdsPage';
import CarAdForm from './components/forms/CarAdForm';
import ContactPage from './components/views/ContactPage/ContactPage';
import MyAdsPage from './components/views/MyAdsPage';
import SingleAdPage from './components/views/SingleAdPage';
import NotFoundPage from './components/views/NotFoundPage/NotFoundPage';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={IndexPage}/>
        <Route path="register" component={RegistrationForm}/>
        <Route path="login" component={LoginForm}/>
        <Route path="logout" component={LogoutPage}/>
        <Route path="ads" component={AdsPage}/>
        <Route path="myAds" component={MyAdsPage}/>
        <Route path="ads/create" component={CarAdForm}/>
        <Route path="ads/:adId" component={SingleAdPage}/>
        <Route path='edit/:adId' component={CarAdForm}/>
        <Route path='contacts' component={ContactPage}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;