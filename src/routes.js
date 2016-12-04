/**
 * Created by Tsenko Tsenov on 11/27/2016.
 */
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import RegistrationForm from './components/forms/RegistrationForm'
//import IndexPage from './components/IndexPage';
// import NotFoundPage from './components/NotFoundPage';

const routes = (
    <Route path="/" component={Layout}>
        {/*<IndexRoute component={IndexPage}/>*/}
        <Route path="register" component={RegistrationForm}/>
        {/*<Route path="*" component={NotFoundPage}/>*/}
    </Route>
);

export default routes;