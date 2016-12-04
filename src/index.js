// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
//
// ReactDOM.render(
//     <App/>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

window.onload = () => {
    ReactDOM.render(<AppRoutes/>, document.getElementById('root'));
};/**
 * Created by Tsenko Tsenov on 11/27/2016.
 */