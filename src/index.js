import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import WebFont from 'webfontloader';
WebFont.load({
    google: {
        families: ['Audiowide']
    }
});

// import store from './store';
// import {Provider} from 'react-redux';

import 'bootstrap';

import App from './components/App';

ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root')
);