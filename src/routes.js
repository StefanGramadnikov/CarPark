import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import RegistrationForm from './components/forms/RegistrationForm';
import LoginForm from './components/forms/LoginForm';
import IndexPage from './components/views/HomePage';
import LogoutPage from './components/views/LogoutPage';
import AdsPage from './components/views/AdsPage';
import CarAdForm from './components/forms/CarAdForm';
import NotFoundPage from './components/views/NotFoundPage/NotFoundPage';

const routes = (
    <Route path="/" handler={Layout}>
        <IndexRoute handler={IndexPage}/>
        <Route path="register" handler={RegistrationForm}/>
        <Route path="login" handler={LoginForm}/>
        <Route path="logout" handler={LogoutPage}/>
            <Route path="ads" handler={AdsPage}>
                <Route path="create" handler={CarAdForm}/>
            </Route>
        <Route path="*" handler={NotFoundPage}/>
    </Route>
);

export default routes;