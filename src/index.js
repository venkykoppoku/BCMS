import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login'
import LoginForm from './FormikLogin'
import SignUpForm from './SignUpForm'
import MaterialLogin from './Material-Login'
import {UsersPage} from "./pages/user/UserDetailsPage"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(< UsersPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
