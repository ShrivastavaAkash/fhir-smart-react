import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Launch from './components/Launch';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

const params = Object.fromEntries(window.location.href.replace(/.*\?/, "").split("&").map(v => v.split("=")));
const launchContext = () => window.location.href.replace(/.*\?/, "").split("&").filter(v => v.split("=")[0] == "iss").length > 0;

ReactDOM.render(launchContext() ? <Launch  /> : <App smartKey={params.state ? params.state : null}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
