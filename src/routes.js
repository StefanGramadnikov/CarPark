/**
 * Created by Tsenko Tsenov on 11/27/2016.
 */
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import RegistrationForm from './components/forms/RegistrationForm'
import LoginForm from './components/forms/LoginForm'
import IndexPage from './components/views/HomePage';
import LogoutPage from './components/views/LogoutPage';
// import NotFoundPage from './components/NotFoundPage';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={IndexPage}/>
        <Route path="register" component={RegistrationForm}/>
        <Route path="login" component={LoginForm}/>
        <Route path="logout" component={LogoutPage}/>
    </Route>
);

export default routes;