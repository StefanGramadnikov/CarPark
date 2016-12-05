import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css'

window.onload = () => {
    ReactDOM.render(<AppRoutes/>, document.getElementById('root'));
};