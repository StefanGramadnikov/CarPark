import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import RegistrationForm from './components/forms/RegistrationForm'
import CarAdForm from './components/forms/CarAdForm'

//import IndexPage from './components/IndexPage';
// import NotFoundPage from './components/NotFoundPage';

const routes = (
    <Route path="/" component={Layout}>
        {/*<IndexRoute component={IndexPage}/>*/}
        <Route path="register" component={RegistrationForm}/>
        <Route path="ads/create" component={CarAdForm}/>
        {/*<Route path="*" component={NotFoundPage}/>*/}
    </Route>
);

export default routes;